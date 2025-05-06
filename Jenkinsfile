pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start app in background') {
            steps {
                sh 'nohup npm start > output.log 2>&1 &'
                sleep(time: 5, unit: 'SECONDS')
            }
        }

        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
