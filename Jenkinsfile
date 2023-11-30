pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo "start install"
                sh 'npm install'
            }
        }
        stage('Deliver for development') {
            when {
                branch 'development' 
            }
            steps {
                echo "into development"
                sh 'npm install'
            }
        }
    }
}