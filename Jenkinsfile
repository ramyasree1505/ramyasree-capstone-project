pipeline {
    agent any
    environment {
        IMAGE_NAME = 'my-node-app'
        DOCKERHUB_REPO = 'ramyasree15/my-capstone-project'
        DOCKERHUB_CREDENTIALS = 'dockerhub-token'
        EC2_USER = 'ubuntu'
        EC2_HOST = '98.93.46.22' 
        EC2_KEY_CREDENTIALS = 'ec2-key-credentials-id'
    }

    stages {
        stage('Code Checkout') {
            steps {
                echo 'Checking out code from GitHub'
                git branch: 'main', url: 'https://github.com/ramyasree1505/ramyasree-capstone-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image locally'
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Docker Login & Push') {
            steps {
                  withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat """
                        docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                        docker tag %IMAGE_NAME% %DOCKERHUB_REPO%:latest
                        docker push %DOCKERHUB_REPO%:latest
                    """
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                bat '''
                    ssh -i C:\\path\\to\\your\\private_key.pem ubuntu@your-ec2-ip "docker pull ramyasree15/my-capstone-project:latest && docker run -d --rm -p 3000:3000 ramyasree15/my-capstone-project:latest"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment to EC2 completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Jenkins console for output.'
        }
    }
}
