pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start application') {
            steps {
                sh 'nohup npm start &'
                sleep(time: 5, unit: 'SECONDS')
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
