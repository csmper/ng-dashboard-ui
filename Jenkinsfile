pipeline {
    agent {
        docker { image 'node:16.16.0-alpine' }
    }
    environment {
        HOME = '.'
        registry = 'gsuhas/angular-dashboard-app'
        dockerHubCredentials = 'dockerhub'
        dockerImage = ''
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

        stage('Docker version') {
            steps {
                sh 'docker version'
                script {
                    // dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    
                }
            }
        }


        // stage('Docker build image') {
        //     agent { label 'docker' }
        //     steps {
        //         script {
        //             dockerImage = docker.build registry + ":$BUILD_NUMBER"
        //         }
        //     }
        // }

        // stage('Docker Deploy image') {
        //     agent { label 'docker' }
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