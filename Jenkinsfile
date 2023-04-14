pipeline {
    agent any 
    stages {
        stage('Initialize') {
            steps {
               sh 'docker pull node:latest' 
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Test') {
        //     parallel {
        //         stage('Static code analysis') {
        //             steps { sh 'npm run-script lint' }
        //         }
        //         stage('Unit tests') {
        //             steps { sh 'npm run-script test' }
        //         }
        //     }
        // }

        // stage('Build') {
        // steps { sh 'npm run-script build' }
        // }
    }
}