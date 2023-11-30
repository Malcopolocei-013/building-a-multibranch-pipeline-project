pipeline {
    agent any
    
    stages {
    stage('Build') {
        steps {
            echo 'HAGIMI,HAGIMI,HAGIMI,HAGIMI!'
            echo 'This is a test.'
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