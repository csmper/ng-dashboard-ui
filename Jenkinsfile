pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        localhost = credentials('localhost')  
        dockerImage = ''
    }

    stages {
        // stage('Checkout') {
        //     steps {
        //         git credentialsId: 'github', url:'https://github.com/csmper/ng-dashboard-ui.git', branch: 'main'
        //     }
        // }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Build Image') {
            steps {
                script {
                    sh 'security -v unlock-keychain -p ${localhost_PSW} ~/Library/Keychains/login.keychain-db'
                    dockerImage = docker.build("gsuhas/angular-dashboard-app:${env.BUILD_NUMBER}") 
                }
            }
        }
        
        stage('Push Image') {
            steps {
                script {
                    dockerImage.push()
                }
            }
        }
    }
}
