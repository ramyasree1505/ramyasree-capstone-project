# My Capstone Project

## Overview
This is a Node.js-based web application that helps users manage tasks efficiently.  
It is containerized using Docker and has a CI/CD pipeline configured with Jenkins for automated builds and deployments.

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** (If applicable: React / Angular / HTML/CSS)  
- **Database:** MongoDB / MySQL (choose what your app uses)  
- **CI/CD:** Jenkins  
- **Containerization:** Docker  

## Prerequisites
Make sure you have the following installed:
- [Docker](https://www.docker.com/get-started)  
- Node.js (v18+)  
- Jenkins (for pipeline runs)  
- Git  

**Setup Instructions**

1.**Clone the repository**:
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    
2.**Install dependencies**
    npm install
    
3.**Build Docker image**
    docker build -t my-capstone-project 
    
4.**Run Docker container**
    docker run -p 3000:3000 --env-file .env my-capstone-project
    
5.**Access the application**
    Open your browser and go to http://localhost:3000


#**CI/CD Pipeline**

    **Pipeline stages**

          - Checkout – Pulls code from GitHub
          
          - Build – Builds the Docker image
          
          - Test – Runs unit tests (if any)
          
          - Deploy – Pushes Docker image to Docker Hub / Deploys to AWS EC2

    **Jenkins Setup**
            - Create a new pipeline job
            
            - Point pipeline to this repository
            
            - Add credentials for GitHub and Docker Hub
            
            - Click Build Now to run the pipeline
    
    **Dockerfile**
    
            - This project includes a Dockerfile as well.
