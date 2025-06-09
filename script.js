document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roadmapForm');
    const resultDiv = document.getElementById('roadmapResult');
    const recommendationsDiv = document.getElementById('recommendations');
    const gradeError = document.getElementById('grade-error');
    const interestsError = document.getElementById('interests-error');

    // Sanitize function to prevent XSS
    function sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    const recommendations = {
        9: {
            stem: [
                "Join Math Club or Science Olympiad",
                "Start learning coding through online platforms",
                "Participate in local science fairs",
                "Consider taking advanced math courses"
            ],
            humanities: [
                "Join Debate Club or Model UN",
                "Start a book club or writing club",
                "Participate in essay competitions",
                "Consider taking honors English courses"
            ],
            arts: [
                "Join school band, choir, or theater",
                "Take art classes outside school",
                "Start building a portfolio",
                "Participate in local art competitions"
            ],
            business: [
                "Join DECA or Future Business Leaders of America",
                "Start a small business or school club",
                "Learn basic financial literacy",
                "Participate in entrepreneurship workshops"
            ],
            "social-sciences": [
                "Join History Club or Psychology Club",
                "Volunteer at local community organizations",
                "Start a social awareness campaign",
                "Consider taking AP Human Geography"
            ]
        },
        10: {
            stem: [
                "Prepare for PSAT Math",
                "Participate in coding competitions",
                "Consider summer STEM programs",
                "Start a research project"
            ],
            humanities: [
                "Prepare for PSAT Reading/Writing",
                "Submit writings to literary magazines",
                "Attend writing workshops",
                "Start learning a foreign language"
            ],
            arts: [
                "Lead arts-related school clubs",
                "Participate in regional competitions",
                "Attend summer arts programs",
                "Expand your portfolio"
            ],
            business: [
                "Participate in business plan competitions",
                "Seek internship opportunities",
                "Take leadership roles in business clubs",
                "Start learning about investments"
            ],
            "social-sciences": [
                "Conduct social science research",
                "Expand volunteer work",
                "Consider summer programs in social sciences",
                "Take leadership roles in relevant clubs"
            ]
        },
        11: {
            stem: [
                "Take SAT Subject Tests in Math/Science",
                "Participate in national competitions",
                "Consider research internships",
                "Take multiple AP STEM courses"
            ],
            humanities: [
                "Take SAT Literature Subject Test",
                "Submit to national writing competitions",
                "Consider journalism internships",
                "Take AP English and History"
            ],
            arts: [
                "Prepare for college arts portfolio",
                "Apply to prestigious summer programs",
                "Lead arts organizations",
                "Consider art school applications"
            ],
            business: [
                "Lead business/entrepreneurship clubs",
                "Seek business mentorship",
                "Participate in national competitions",
                "Consider business internships"
            ],
            "social-sciences": [
                "Lead community service projects",
                "Consider research opportunities",
                "Take relevant AP courses",
                "Prepare for leadership roles"
            ]
        },
        12: {
            stem: [
                "Apply for STEM scholarships",
                "Complete advanced projects",
                "Mentor younger students",
                "Prepare for college interviews"
            ],
            humanities: [
                "Apply for humanities scholarships",
                "Complete senior thesis/project",
                "Submit to national competitions",
                "Prepare writing samples"
            ],
            arts: [
                "Finalize college arts portfolio",
                "Apply for arts scholarships",
                "Hold solo exhibitions/performances",
                "Prepare for auditions"
            ],
            business: [
                "Apply for business scholarships",
                "Finalize business projects",
                "Network with professionals",
                "Prepare business portfolios"
            ],
            "social-sciences": [
                "Apply for social science scholarships",
                "Complete major service projects",
                "Present research findings",
                "Prepare for interviews"
            ]
        }
    };

    function validateForm() {
        let isValid = true;
        
        // Validate grade
        const grade = document.getElementById('grade').value;
        if (!grade) {
            gradeError.textContent = 'Please select your grade';
            isValid = false;
        } else {
            gradeError.textContent = '';
        }

        // Validate interests
        const interests = Array.from(document.getElementById('interests').selectedOptions)
            .map(option => option.value);
        if (interests.length === 0) {
            interestsError.textContent = 'Please select at least one academic interest';
            isValid = false;
        } else {
            interestsError.textContent = '';
        }

        return isValid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const grade = document.getElementById('grade').value;
        const interests = Array.from(document.getElementById('interests').selectedOptions)
            .map(option => option.value);
        const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
            .map(checkbox => checkbox.value);

        try {
            generateRoadmap(grade, interests, activities);
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error('Error generating roadmap:', error);
            alert('An error occurred while generating your roadmap. Please try again.');
        }
    });

    function generateRoadmap(grade, interests, activities) {
        recommendationsDiv.innerHTML = '';
        
        // Validate grade exists in recommendations
        if (!recommendations[grade]) {
            console.error(`Invalid grade: ${grade}`);
            alert('An error occurred: Invalid grade selected');
            return;
        }
        
        // Add current activities section
        const currentActivities = document.createElement('div');
        currentActivities.className = 'recommendation';
        currentActivities.innerHTML = `
            <h3>Current Activities</h3>
            <p>Great job participating in: ${activities.length > 0 ? activities.map(sanitize).join(', ') : 'No activities selected yet'}</p>
        `;
        recommendationsDiv.appendChild(currentActivities);

        // Add recommendations for each interest
        interests.forEach(interest => {
            const interestRecs = recommendations[grade][interest];
            if (!interestRecs) {
                console.warn(`No recommendations found for grade ${grade} and interest ${interest}`);
                return;
            }

            const recDiv = document.createElement('div');
            recDiv.className = 'recommendation';
            recDiv.innerHTML = `
                <h3>Recommendations for ${sanitize(interest.charAt(0).toUpperCase() + interest.slice(1))}</h3>
                <ul>
                    ${interestRecs.map(rec => `<li>${sanitize(rec)}</li>`).join('')}
                </ul>
            `;
            recommendationsDiv.appendChild(recDiv);
        });

        // Add general recommendations
        const generalRecs = document.createElement('div');
        generalRecs.className = 'recommendation';
        generalRecs.innerHTML = `
            <h3>General Recommendations</h3>
            <ul>
                <li>Maintain a strong GPA</li>
                <li>Prepare for standardized tests</li>
                <li>Build relationships with teachers for recommendations</li>
                <li>Document your achievements and activities</li>
            </ul>
        `;
        recommendationsDiv.appendChild(generalRecs);

        resultDiv.classList.remove('hidden');
    }

    // Add input event listeners for real-time validation
    document.getElementById('grade').addEventListener('change', () => {
        if (document.getElementById('grade').value) {
            gradeError.textContent = '';
        }
    });

    document.getElementById('interests').addEventListener('change', () => {
        if (document.getElementById('interests').selectedOptions.length > 0) {
            interestsError.textContent = '';
        }
    });
}); 