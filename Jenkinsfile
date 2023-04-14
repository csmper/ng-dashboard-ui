pipeline {
    agent any 
    stages {
        stage('Install') {
            steps {
                script {
                    docker.withTool('docker') { 'docker pull image node:latest' }
                    sh 'npm install' 
                }
            }
        }

        stage('Test') {
            parallel {
                stage('Static code analysis') {
                    steps { sh 'npm run-script lint' }
                }
                stage('Unit tests') {
                    steps { sh 'npm run-script test' }
                }
            }
        }

        stage('Build') {
        steps { sh 'npm run-script build' }
        }
    }
}