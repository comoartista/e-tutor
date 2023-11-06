// const coursesList = document.querySelector('.courses-list');
// const btnFilter = document.getElementById('btn-filter');
// const btnSearch = document.getElementById('btn-search');
// const filterSideBar = document.querySelector('.filter');


// const btnFilterHandler = () => {
//     filterSideBar.classList.toggle('hide');
// }
// const courses = [
//     {
//         title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
//         category: 'Design',
//         price: 49,
//         img: '1',
//         rating: 4.9,
//         students: 197.637,
//     },
//     {
//         title: 'Adobe Premiere Pro CC – Advanced Training Course',
//         category: 'Developments',
//         price: 32,
//         img: '2',
//         rating: 4.6,
//         students: 236.568,
//     },
//     {
//         title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
//         category: 'Marketing',
//         price: 13,
//         img: '3',
//         rating: 4.1,
//         students: 511.123,
//     }
//     ,
//     {
//         title: 'Learn Ethical Hacking From Scratch 2021',
//         category: 'IT & Software',
//         price: 35,
//         img: '4',
//         rating: 4.8,
//         students: 451.444,
//     }
// ]

// const renderCourses = (filter = '') => {    
//     coursesList.innerHTML = '';

//     const filteredCourses = !filter //false
//         ? courses //if it's true that render courses
//         : courses.filter(course => course.title.toLowerCase().includes(filter.toLowerCase())); //if it's false that render courses.filter

//         filteredCourses.forEach((course) => {
//             const coursesItem = document.createElement('div');
//             coursesItem.classList.add('courses-item');
    
//             const coursesItemImg = document.createElement('img');
//             coursesItemImg.classList.add('courses-item__img');
//             coursesItemImg.textContent = `../images/course-cover-${course.img}.jpg`;
    
//             const coursesItemContent = document.createElement('div');
//             coursesItemContent.classList.add('courses-item__content');
    
//             const coursesItemInfo = document.createElement('div');
//             const coursesItemTop = document.createElement('div');
//             coursesItemTop.classList.add('courses-item__top');
    
//             const coursesItemCategory = document.createElement('div');
//             coursesItemCategory.classList.add('courses-item__category');
//             coursesItemCategory.textContent = course.category;
    
//             const coursesItemPrice = document.createElement('div');
//             coursesItemPrice.classList.add('courses-item__price');
//             coursesItemPrice.textContent = `$${course.price}`
    
//             const coursesItemTitle = document.createElement('h5');
//             coursesItemTitle.textContent = course.title;
    
//             const coursesItemBottom = document.createElement('div');
//             coursesItemBottom.classList.add('courses-item__bottom');
    
//             const coursesItemRating = document.createElement('div');
//             const coursesItemIconStar = document.createElement('i');
//             coursesItemIconStar.classList.add('bi', 'bi-star-fill');
//             const coursesItemRatingNum = document.createElement('span');
//             coursesItemRatingNum.textContent = course.rating;        
//             coursesItemRating.append(coursesItemIconStar, coursesItemRatingNum);
    
//             const coursesItemStudents = document.createElement('div');
//             const coursesItemIconPeople = document.createElement('i');
//             coursesItemIconPeople.classList.add('bi', 'bi-people', 'text-primary');
//             const coursesItemStudentsNum = document.createElement('span');
//             coursesItemStudentsNum.textContent = course.students;   
//             const coursesItemStudentsText = document.createElement('span');
//             coursesItemStudentsText.classList.add('courses-item__students-text');
    
//             coursesItemStudentsText.textContent = 'students';
//             coursesItemStudentsNum.append(coursesItemStudentsText);
    
//             coursesItemStudents.append(coursesItemIconPeople, coursesItemStudentsNum);
//             coursesItemTop.append(coursesItemCategory, coursesItemPrice)
//             coursesItemBottom.append(coursesItemRating, coursesItemStudents)
//             coursesItemInfo.append(coursesItemTop, coursesItemTitle);
//             coursesItemContent.append(coursesItemInfo, coursesItemBottom);
//             coursesItem.append(coursesItemImg, coursesItemContent);
//             coursesList.append(coursesItem);
//         })
// }

// renderCourses();

// const searchCoursesHandler = () => {
//     const inputSearch = document.getElementById('input-search').value;
//     renderCourses(inputSearch);
// }

// btnFilter.addEventListener('click', btnFilterHandler);
// btnSearch.addEventListener('click', searchCoursesHandler);



const btnFilter = document.getElementById('btn-filter');
const btnSearch = document.getElementById('btn-search');
const filterSideBar = document.querySelector('.filter');
const inputSearch = document.getElementById('input-search');
const coursesList = document.querySelector('.courses-list');

const btnFilterHandler = () => {
    filterSideBar.classList.toggle('hide');
};

class Course {
    constructor(title, category, price, img, rating, students) {
        this.title = title;
        this.category = category;
        this.price = price;
        this.img = img; 
        this.rating = rating;
        this.students = students;
    }
}

class CourseItem {
    constructor(course) {
        this.course = course;
    }

    render() {
        const courseEl = document.createElement('div');
        courseEl.classList.add('courses-item');
        courseEl.innerHTML = `
        <div class="courses-item__img">
            <img class="card-img-top" src="./assets/images/courses-cover/course-cover-${this.course.img}.jpg" alt="${this.course.title}">
        </div>
        <div class="courses-item__content">
            <div class="courses-item__info">
                <div class="courses-item__top">
                    <div class="courses-item__category">${this.course.category}</div>
                    <div class="courses-item__price">$ ${this.course.price}</div>
                </div>
                <h5 class="courses-item__title">${this.course.title}</h5>
            </div>
            <div class="courses-item__bottom">
                <div class="courses-item__rating">
                    <i class="bi bi-star-fill"></i>
                    <span class="courses-item__rating-num">${this.course.rating}</span>
                </div>
                <div class="courses-item__students">
                    <i class="bi bi-people"></i>
                    <span class="courses-item__students-num">${this.course.students}
                        <span class="courses-item__students-text">students</span>
                    </span>
                </div>
            </div>
        </div>
        `;
        return courseEl;
    }
}

class CoursesList {
    constructor(courses) {
        this.courses = courses;
    }

    render(filter = '') {
        coursesList.innerHTML = '';
        const filteredCourses = !filter
            ? this.courses
            : this.courses.filter(course => course.title.toLowerCase().includes(filter.toLowerCase()));

        filteredCourses.forEach(course => {
            const courseItem = new CourseItem(course);
            const courseEl = courseItem.render();
            coursesList.append(courseEl);
        });
    }
}

const initialCourses = [
    new Course(
        'Complete Blender Creator: Learn 3D Modelling for Beginners',
        'Design',
        49,
        '1',
        4.9,
        197637
    ),

    new Course(
        'Adobe Premiere Pro CC – Advanced Training Course',
        'Development',
        32,
        '2',
        4.6,
        236568
    ),

    new Course(
        'Ultimate AWS Certified Solutions Architect Associate 2021',
        'Marketing',
        13,
        '3',
        4.1,
        511123
    ),

    new Course(
        'Learn Ethical Hacking From Scratch 2021',
        'IT & Software',
        35,
        '4',
        4.8,
        451444
    ),
];

const courseList = new CoursesList(initialCourses);
courseList.render();

const searchCoursesHandler = () => {
    const inputSearchValue = inputSearch.value;
    courseList.render(inputSearchValue);
};

btnFilter.addEventListener('click', btnFilterHandler);
btnSearch.addEventListener('click', searchCoursesHandler);

