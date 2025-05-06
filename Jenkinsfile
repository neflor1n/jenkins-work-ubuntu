pipeline {
    agent any

    stages {
        stage('Loo fail') {
            steps {
                sh 'echo "See on testfaili sisu" > test.txt'
            }
        }

        stage('Näita faili') {
            steps {
                sh 'cat test.txt'
            }
        }

        stage('Näita minu nime') {
            steps {
                sh 'echo "Bogdan Sergachev"'
            }
        }
    }
}
