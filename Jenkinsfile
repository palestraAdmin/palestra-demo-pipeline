pipeline {
    agent any

    tools {
        nodejs 'NodeJS 26'
    }
 
    environment {
        APP_NAME = 'palestra-demo-pipeline'
        EMAIL_TO = 'palestra901@hotmail.com'
    }
 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/palestraAdmin/palestra-demo-pipeline.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                sh 'node app.js'
            }
        }
    }
 
    post {
        success {
            emailext(
                subject: "Despliegue exitoso: ${APP_NAME} build #${BUILD_NUMBER}",
                body: "El pipeline se ejecuto correctamente. Ver: ${BUILD_URL}",
                to: "${EMAIL_TO}"
            )
        }

        failure {
            emailext(
                subject: "Fallo el despliegue: ${APP_NAME} build #${BUILD_NUMBER}",
                body: "Revisar el log: ${BUILD_URL}console",
                to: "${EMAIL_TO}"
            )
        }
    }
}