let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {
    let container = document.createElement('div');
    container.classList.add('container');

    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = course.title;
    container.appendChild(title);

    let duration = document.createElement('div');
    duration.classList.add('duration');
    let monthDuration = document.createElement('div');
    monthDuration.classList.add('month');
    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hour');
    monthDuration.innerText = course.monthDuration;
    hourDuration.innerText = course.hourDuration;
    duration.append(monthDuration, hourDuration);
    container.appendChild(duration);


    let modules = document.createElement('ul');
    modules.classList.add('modules');
    for (let i = 0; i < course.modules.length; i++) {
        let module = document.createElement('li');
        module.innerText = course.modules[i];
        modules.appendChild(module);
    }
    container.appendChild(modules);

    document.body.appendChild(container);

}
