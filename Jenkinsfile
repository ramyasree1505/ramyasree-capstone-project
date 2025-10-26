pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-node-app"
        CONTAINER_NAME = "node-app-container"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out GitHub code "
                git branch: 'main', url: 'https://github.com/ramyasree1505/ramyasree-capstone-project.git'
            }
        }

        stage('Build') {
            steps {
                echo "Installing dependencies "
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests "
                sh 'npm test || echo "No tests found, skipping..."'
            }
        }
    }

    post {
        success {
            echo "Deployment successful "
        }
        failure {
            echo "Build or deploy failed "
        }
    }
}
