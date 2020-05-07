import Workout from '../models/workout';

const WORKOUTS = [
    new Workout(
        '111',
        'Arnol123',
        'Basic Pushup',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-formcheck-index-social-1551985785.png',
        'A pushup should always start from this position and move you towards the ground'
    ),
    new Workout(
        '121',
        'Stallone123',
        'Basic Pullup',
        'https://www.climbing.com/.image/t_share/MTM3MzI0NDMzMjY5MzM1MjA5/trainingperfectpullupsjpg.jpg',
        'An image of how a pull up should be done'
    ),
    new Workout(
        '123',
        'VanDam12',
        'Squat',
        'https://physiolounge.co.uk/wp-content/uploads/2017/05/squat.jpg',
        'An image of how a squat up should be done, repeat this exercise 5x10 times with 1min pauses'
    )
    ,
    new Workout(
        '125',
        'VanDam12',
        'Ab crunch',
        'https://www.popworkouts.com/wp-content/uploads/2012/12/upper-body-crunches.jpg',
        'Start and end of an ab crunch'
    )
];

export default WORKOUTS;