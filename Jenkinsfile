pipeline {
    agent {
        docker { image 'node:16.16.0-alpine' }
    }
    environment {
        HOME = '.'
        registry = 'gsuhas/angular-dashboard-app'
        dockerHubCredentials = 'dockerhub'
        dockerImage = ''
        PATH = "$PATH:/usr/local"
    }
    stages {
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

        stage('Docker build image') {
            steps {
                dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
        }

        stage('Docker Deploy image') {
            steps {
                docker.withRegistry( 'https://hub.docker.com/', dockerhub ) {
                    dockerImage.push()
                }
            }
        }
    }
}