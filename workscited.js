document.addEventListener('DOMContentLoaded', function() {
    const citations = [
	{
            link: "https://youtu.be/VLOKMjHEyhY?si=ErHl7SsLcFxx4Cya",
            title: "Calisthenics Explained - Are Bodyweight Exercises Good For Building Muscle?",
            author: "PictureFit",
            year: "2016"
        },
        {
            link: "https://youtu.be/ioAKsQk0axw?si=Ec2DBDVDJk7lFXeG",
            title: "What are Calisthenic Workouts - Calisthenics Explained",
            author: "OneHowto",
            year: "2022"

	},
	{
            link: "https://youtu.be/VLOKMjHEyhY?si=ErHl7SsLcFxx4Cya",
            title: "What Is Calisthenics?",
            author: "Andrew Alinda",
            year: "2023"
        },
        {
            link: "https://youtu.be/DmXVnn2mAow?si=JBPZfovoN4sPH_mE",
            title: "The Mental Benefits of Morning Calisthenics (How to Reduce Anxiety & Boost your Mood)",
            author: "Bodyweight Muscle",
            year: "2023"

	},
{
            link: "https://youtu.be/ioAKsQk0axw?si=Ec2DBDVDJk7lFXeG",
            title: "8 Calisthenics Benefits You DON'T WANT to MISS Out On",
            author: "Fitnessdy",
            year: "2023"
        },
        {
            link: "https://longevity.technology/lifestyle/calisthenics-types-of-exercise-benefits-importance-and-research/#:~:text=As%20a%20strength%20training%20exercise,body%20weight%20to%20do%20calisthenics.",
            title: "Calisthenics: types of exercise, benefits, importance and research",
            author: "Longevity Technology",
            year: "2023"

	},
	{
            link: "https://www.youtube.com/shorts/IgmfBN2InGc",
            title: "Work Your Back Without Equipment!👍🏾",
            author: "Drew Momeka",
            year: "2022"
        },
        {
            link: "https://youtu.be/_YCJEQ_I0Tw?si=kUEC06gzTqjQe0Kj",
            title: "COMPLETE 20 MIN ABS WORKOUT (At Home No Equipment)",
            author: "Serhiy Moroz",
            year: "2023"

	},{
            link: "https://youtu.be/VLOKMjHEyhY?si=ErHl7SsLcFxx4Cya",
            title: "Home legs workout (no equipment)",
            author: "Samir Aboudou",
            year: "2022"
        },
        {
            link: "https://www.walmart.com/ip/150lbs-Resistance-Bands-Working-Out-Exercise-Bands-Workout-Set-Handles-Men-Women-Weights-Strength-Training-Equipment-Home/3633652053?athbdg=L1600&from=%2Fsearch",
            title: "Resistance Bands From Walmart",
            author: "Sold by Walmart",
            year: "Present"

	},
	{
            link: "https://www.walmart.com/ip/SPRI-Steel-Pull-up-Bar-Adjustable-for-Doorways-up-to-32-inches-Black/746785125?athbdg=L1600&from=%2Fsearch",
            title: "Pull Up Bar by Walmart",
            author: "Sold by Walmart",
            year: "Present"

	},
	
        // structure of citation table below
    ];

    const tableBody = document.querySelector('#citationsTable tbody');

    citations.forEach(citation => {
        const row = document.createElement('tr');

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = citation.link;
        link.textContent = citation.title;
        linkCell.appendChild(link);
        row.appendChild(linkCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = citation.author;
        row.appendChild(authorCell);

        const yearCell = document.createElement('td');
        yearCell.textContent = citation.year;
        row.appendChild(yearCell);

        tableBody.appendChild(row);
    });
});
