const coursesList = document.querySelector('.courses-list');
const btnFilter = document.getElementById('btn-filter');
const filterSideBar = document.querySelector('.filter');


const btnFilterHandler = () => {
    filterSideBar.classList.toggle('hide');
}
const courses = [
    {
        title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
        category: 'Design',
        price: 49,
        img: '1',
        rating: 4.9,
        students: 197.637,
    },
    {
        title: 'Adobe Premiere Pro CC – Advanced Training Course',
        category: 'Developments',
        price: 32,
        img: '2',
        rating: 4.6,
        students: 236.568,
    },
    {
        title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
        category: 'Marketing',
        price: 13,
        img: '3',
        rating: 4.1,
        students: 511.123,
    }
    ,
    {
        title: 'Learn Ethical Hacking From Scratch 2021',
        category: 'IT & Software',
        price: 35,
        img: '4',
        rating: 4.8,
        students: 451.444,
    }
]

const showCourses = (courses) => {
    courses.forEach((course) => {
        const coursesItem = document.createElement('div');
        coursesItem.classList.add('courses-item');

        const coursesItemImg = document.createElement('img');
        coursesItemImg.classList.add('courses-item__img');
        coursesItemImg.textContent = `../images/course-cover-${course.img}.jpg`;

        const coursesItemContent = document.createElement('div');
        coursesItemContent.classList.add('courses-item__content');

        const coursesItemInfo = document.createElement('div');
        const coursesItemTop = document.createElement('div');
        coursesItemTop.classList.add('courses-item__top');

        const coursesItemCategory = document.createElement('div');
        coursesItemCategory.classList.add('courses-item__category');
        coursesItemCategory.textContent = course.category;

        const coursesItemPrice = document.createElement('div');
        coursesItemPrice.classList.add('courses-item__price');
        coursesItemPrice.textContent = `$${course.price}`

        const coursesItemTitle = document.createElement('h5');
        coursesItemTitle.textContent = course.title;

        const coursesItemBottom = document.createElement('div');
        coursesItemBottom.classList.add('courses-item__bottom');

        const coursesItemRating = document.createElement('div');
        const coursesItemIconStar = document.createElement('i');
        coursesItemIconStar.classList.add('bi', 'bi-star-fill');
        const coursesItemRatingNum = document.createElement('span');
        coursesItemRatingNum.textContent = course.rating;        
        coursesItemRating.append(coursesItemIconStar, coursesItemRatingNum);

        const coursesItemStudents = document.createElement('div');
        const coursesItemIconPeople = document.createElement('i');
        coursesItemIconPeople.classList.add('bi', 'bi-people', 'text-primary');
        const coursesItemStudentsNum = document.createElement('span');
        coursesItemStudentsNum.textContent = course.students;   
        const coursesItemStudentsText = document.createElement('span');
        coursesItemStudentsText.classList.add('courses-item__students-text');

        coursesItemStudentsText.textContent = 'students';
        coursesItemStudentsNum.append(coursesItemStudentsText);

        coursesItemStudents.append(coursesItemIconPeople, coursesItemStudentsNum);
        coursesItemTop.append(coursesItemCategory, coursesItemPrice)
        coursesItemBottom.append(coursesItemRating, coursesItemStudents)
        coursesItemInfo.append(coursesItemTop, coursesItemTitle);
        coursesItemContent.append(coursesItemInfo, coursesItemBottom);
        coursesItem.append(coursesItemImg, coursesItemContent);
        coursesList.append(coursesItem);
    })
}
showCourses(courses);

btnFilter.addEventListener('click', btnFilterHandler);
