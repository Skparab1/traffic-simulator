# Traffic simulator
Project for lec hacks. Built in less than 11 hours, Won 3rd place

![](ezgif.com-gif-maker(8).gif)

## How it works
- Traffic simulator, which lets you change settings, speed, and light algorithms
- Simulates the movement of cars on screen
- Goves results of live wait times and algorithm efficiency

## Used Libraries
- p5.js graphics library

## Features
- completely self-contained - the cars are controlled by their position and the status of their lights. The system controls itself, with algorithms only controlling the light state, and the cars being controlled by the lights.
- Simulation is randomized - something essential for accurate simulations
- Runs with 48 cars, pushes cars into arrays one in a while, controlled by settings
- Lets user change timing, such as light timing and car speed
- User can change tailgate, the distance that cars tailgate each other
