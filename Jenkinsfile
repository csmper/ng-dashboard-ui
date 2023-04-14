pipeline {
    agent any
    environment {
        HOME = '.'
        registry = 'gsuhas/angular-dashboard-app'
        dockerHubCredentials = 'dockerhub'
        dockerImage = ''
    }
    stages {
        stage('Pull Node') {
            steps { sh 'docker pull node:16.16.0-alpine' }
        }

        stage('Install') {
            steps { sh 'npm install' }
        }

        stage('Test') {
            parallel {
                // stage('Static code analysis') {
                //     steps { sh 'npm run-script lint' }
                // }
                stage('Unit tests') {
                    steps { sh 'npm run test' }
                }
            }
        }

        stage('Build') {
            steps { sh 'npm run build' }
        }

        // stage('Docker build image') {
        //     steps {
        //         script {
        //             dockerImage = docker.build registry + ":$BUILD_NUMBER"
        //         }
        //     }
        // }

        // stage('Docker Deploy image') {
        //     steps {
        //         script {
        //             docker.withRegistry( 'https://hub.docker.com/', dockerhub ) {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
    }
}