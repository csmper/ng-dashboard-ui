pipeline {
    agent any 
    stages {
        stage('Install') {
            steps {
               sh 'docker pull image node:latest' 
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