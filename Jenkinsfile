pipeline {
  agent any
  environment {
    DOCKER_CERT_PATH = credentials('dockerhub')
  }
  stages {
    stage('Docker Check') {
      steps {
        sh "docker version" // DOCKER_CERT_PATH is automatically picked up by the Docker client
      }
    }
  }
}
