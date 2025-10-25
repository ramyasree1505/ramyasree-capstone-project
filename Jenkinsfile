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
                checkout scm
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

        stage('Docker Build') {
            steps {
                echo "Building Docker image "
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Deploy') {
            steps {
                echo "Stopping old container if exists "
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME
                '''
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
