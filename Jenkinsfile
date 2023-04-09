node {

    stage('Initialize')
    {
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('Checkout') 
    {
        checkout scm
    }
    stage('Node') {
      script {
        sh "docker version"
      }
    }
}
