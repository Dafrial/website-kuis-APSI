// Quiz Application Logic
class QuizApp {
    constructor() {
        this.currentSection = 'pg'; // 'pg' or 'essay'
        this.currentQuestionIndex = 0;
        this.userAnswers = {
            pg: {},
            essay: {}
        };
        this.answeredPG = {}; // Track which PG questions have been answered (locked)
        this.studentName = '';
        this.studentNIM = '';
        
        // Shuffled questions arrays
        this.shuffledPG = [];
        this.shuffledEssay = [];
        
        this.init();
    }

    init() {
        // Shuffle questions on page load
        this.shuffleQuestions();
        this.bindEvents();
    }

    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const shuffled = [...array]; // Create a copy
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestions() {
        // Shuffle both PG and Essay questions
        this.shuffledPG = this.shuffleArray(multipleChoiceQuestions);
        this.shuffledEssay = this.shuffleArray(essayQuestions);
        console.log('Soal telah diacak!');
    }

    bindEvents() {
        // Start button
        document.getElementById('startBtn').addEventListener('click', () => this.startQuiz());
        
        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('nextBtn').addEventListener('click', () => this.navigateQuestion(1));
        document.getElementById('submitBtn').addEventListener('click', () => this.showSubmitConfirmation());
        
        // Section tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchSection(e.target.dataset.section));
        });

        // Result buttons
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());
        document.getElementById('retryBtn').addEventListener('click', () => this.resetQuiz());
        document.getElementById('backToResultBtn').addEventListener('click', () => this.backToResult());

        // Enter key on form
        document.getElementById('studentName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') document.getElementById('studentNIM').focus();
        });
        document.getElementById('studentNIM').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });
    }

    startQuiz() {
        this.studentName = document.getElementById('studentName').value.trim();
        this.studentNIM = document.getElementById('studentNIM').value.trim();

        if (!this.studentName || !this.studentNIM) {
            alert('Mohon isi nama dan NIM terlebih dahulu!');
            return;
        }

        // Hide start screen, show quiz screen
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('quizScreen').classList.remove('hidden');

        // Set student info
        document.getElementById('studentInfo').textContent = `${this.studentName} (${this.studentNIM})`;

        // Generate question navigation
        this.generateQuestionNav();

        // Load first question
        this.loadQuestion();
    }

    generateQuestionNav() {
        const navContainer = document.getElementById('questionNav');
        navContainer.innerHTML = '';

        // PG Navigation
        const pgSection = document.createElement('div');
        pgSection.id = 'pgNav';
        pgSection.innerHTML = '<div class="nav-section-title">Pilihan Ganda (1-55)</div>';
        const pgGrid = document.createElement('div');
        pgGrid.className = 'nav-grid';
        
        for (let i = 0; i < this.shuffledPG.length; i++) {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.textContent = i + 1;
            btn.dataset.index = i;
            btn.dataset.section = 'pg';
            btn.addEventListener('click', () => this.goToQuestion('pg', i));
            pgGrid.appendChild(btn);
        }
        pgSection.appendChild(pgGrid);
        navContainer.appendChild(pgSection);

        // Essay Navigation
        const essaySection = document.createElement('div');
        essaySection.id = 'essayNav';
        essaySection.innerHTML = '<div class="nav-section-title">Esai (1-15)</div>';
        essaySection.style.display = 'none';
        const essayGrid = document.createElement('div');
        essayGrid.className = 'nav-grid';
        
        for (let i = 0; i < essayQuestions.length; i++) {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.textContent = i + 1;
            btn.dataset.index = i;
            btn.dataset.section = 'essay';
            btn.addEventListener('click', () => this.goToQuestion('essay', i));
            essayGrid.appendChild(btn);
        }
        essaySection.appendChild(essayGrid);
        navContainer.appendChild(essaySection);
    }

    switchSection(section) {
        this.currentSection = section;
        this.currentQuestionIndex = 0;

        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === section);
        });

        // Update nav visibility
        document.getElementById('pgNav').style.display = section === 'pg' ? 'block' : 'none';
        document.getElementById('essayNav').style.display = section === 'essay' ? 'block' : 'none';

        this.loadQuestion();
        this.updateNavButtons();
    }

    goToQuestion(section, index) {
        if (this.currentSection !== section) {
            this.switchSection(section);
        }
        this.currentQuestionIndex = index;
        this.loadQuestion();
        this.updateNavButtons();
    }

    loadQuestion() {
        const container = document.getElementById('questionContainer');
        const questions = this.currentSection === 'pg' ? this.shuffledPG : this.shuffledEssay;
        const question = questions[this.currentQuestionIndex];
        const totalQuestions = questions.length;

        if (this.currentSection === 'pg') {
            const isAnswered = this.answeredPG[question.id] !== undefined;
            const userAnswer = this.userAnswers.pg[question.id];
            
            container.innerHTML = `
                <div class="question-header">
                    <span class="question-number">Soal ${this.currentQuestionIndex + 1} dari ${totalQuestions}</span>
                    <span class="question-type">Pilihan Ganda</span>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="options-container">
                    ${question.options.map((opt, idx) => {
                        let optionClass = 'option';
                        let statusIcon = '';
                        
                        if (isAnswered) {
                            if (idx === question.correctAnswer) {
                                optionClass += ' correct-answer';
                                statusIcon = '<i class="fas fa-check-circle" style="color: #4caf50; margin-left: 10px;"></i>';
                            } else if (idx === userAnswer && idx !== question.correctAnswer) {
                                optionClass += ' wrong-answer';
                                statusIcon = '<i class="fas fa-times-circle" style="color: #f44336; margin-left: 10px;"></i>';
                            }
                            optionClass += ' disabled';
                        } else if (userAnswer === idx) {
                            optionClass += ' selected';
                        }
                        
                        return `
                            <div class="${optionClass}" data-index="${idx}" 
                                 onclick="${isAnswered ? '' : 'quiz.selectOption(' + idx + ')'}">
                                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                                <span class="option-text">${opt}</span>
                                ${statusIcon}
                            </div>
                        `;
                    }).join('')}
                </div>
                ${isAnswered ? `
                    <div class="feedback-container ${userAnswer === question.correctAnswer ? 'correct' : 'incorrect'}">
                        <div class="feedback-header">
                            ${userAnswer === question.correctAnswer ? 
                                '<i class="fas fa-check-circle"></i> Jawaban Benar!' : 
                                '<i class="fas fa-times-circle"></i> Jawaban Salah'}
                        </div>
                        <div class="feedback-explanation">
                            <strong>Penjelasan:</strong> ${question.explanation}
                        </div>
                    </div>
                ` : ''}
            `;
        } else {
            const userAnswer = this.userAnswers.essay[question.id] || '';
            const keywordResult = userAnswer ? this.checkKeywords(userAnswer, question.keywords) : null;
            
            container.innerHTML = `
                <div class="question-header">
                    <span class="question-number">Soal ${this.currentQuestionIndex + 1} dari ${totalQuestions}</span>
                    <span class="question-type">Esai</span>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="essay-container">
                    <textarea class="essay-textarea" id="essayAnswer" 
                              placeholder="Tuliskan jawaban Anda di sini..."
                              oninput="quiz.saveEssayAnswer()">${userAnswer}</textarea>
                    <p class="essay-hint"><i class="fas fa-info-circle"></i> Jawaban akan tersimpan dan dinilai otomatis berdasarkan kata kunci</p>
                    
                    <div id="keywordScoreArea">
                        ${keywordResult ? `
                            <div class="keyword-score-container">
                                <div class="keyword-score-header">
                                    <span><i class="fas fa-key"></i> Skor Kata Kunci</span>
                                    <span class="keyword-percentage ${keywordResult.percentage >= 70 ? 'good' : keywordResult.percentage >= 40 ? 'medium' : 'low'}">${keywordResult.percentage}%</span>
                                </div>
                                <div class="keyword-progress">
                                    <div class="keyword-progress-fill" style="width: ${keywordResult.percentage}%"></div>
                                </div>
                                <div class="keyword-details">
                                    <p><strong>Kata kunci ditemukan (${keywordResult.found.length}/${question.keywords.length}):</strong></p>
                                    <div class="keyword-tags">
                                        ${question.keywords.map(kw => `
                                            <span class="keyword-tag ${keywordResult.found.includes(kw.toLowerCase()) ? 'found' : 'missing'}">${kw}</span>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Show/Hide Answer Section -->
                    <div class="answer-section">
                        <button class="toggle-answer-btn" id="toggleAnswerBtn" onclick="quiz.toggleAnswer()">
                            <i class="fas fa-eye"></i> Lihat Jawaban
                        </button>
                        <div class="answer-box hidden" id="answerBox">
                            <div class="answer-label"><i class="fas fa-lightbulb"></i> Jawaban Singkat:</div>
                            <div class="answer-content">${question.shortAnswer || this.generateShortAnswer(question)}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        this.updateNavHighlight();
        this.updateProgress();
    }

    checkKeywords(answer, keywords) {
        const answerLower = answer.toLowerCase();
        const found = [];
        
        keywords.forEach(keyword => {
            if (answerLower.includes(keyword.toLowerCase())) {
                found.push(keyword.toLowerCase());
            }
        });
        
        const percentage = Math.round((found.length / keywords.length) * 100);
        
        return {
            found: found,
            total: keywords.length,
            percentage: percentage
        };
    }

    generateShortAnswer(question) {
        // Fallback if shortAnswer not defined - use keywords to create a simple answer
        return `<strong>Kata kunci penting:</strong> ${question.keywords.slice(0, 6).join(', ')}`;
    }

    selectOption(index) {
        const question = this.shuffledPG[this.currentQuestionIndex];
        
        // Check if already answered
        if (this.answeredPG[question.id] !== undefined) {
            return;
        }
        
        // Save answer and lock it
        this.userAnswers.pg[question.id] = index;
        this.answeredPG[question.id] = index;
        
        // Reload question to show feedback
        this.loadQuestion();
        this.updateNavHighlight();
        this.updateProgress();
    }

    saveEssayAnswer() {
        const question = this.shuffledEssay[this.currentQuestionIndex];
        const textarea = document.getElementById('essayAnswer');
        if (!textarea) return;
        
        const answer = textarea.value.trim();
        
        if (answer) {
            this.userAnswers.essay[question.id] = answer;
        } else {
            delete this.userAnswers.essay[question.id];
        }

        // Update keyword score without reloading the entire question
        clearTimeout(this.essayTimeout);
        this.essayTimeout = setTimeout(() => {
            this.updateKeywordScore(question, answer);
        }, 500);

        this.updateNavHighlight();
        this.updateProgress();
    }

    updateKeywordScore(question, answer) {
        const container = document.getElementById('keywordScoreArea');
        if (!container) return;
        
        if (answer) {
            const keywordResult = this.checkKeywords(answer, question.keywords);
            container.innerHTML = `
                <div class="keyword-score-container">
                    <div class="keyword-score-header">
                        <span><i class="fas fa-key"></i> Skor Kata Kunci</span>
                        <span class="keyword-percentage ${keywordResult.percentage >= 70 ? 'good' : keywordResult.percentage >= 40 ? 'medium' : 'low'}">${keywordResult.percentage}%</span>
                    </div>
                    <div class="keyword-progress">
                        <div class="keyword-progress-fill" style="width: ${keywordResult.percentage}%"></div>
                    </div>
                    <div class="keyword-details">
                        <p><strong>Kata kunci ditemukan (${keywordResult.found.length}/${question.keywords.length}):</strong></p>
                        <div class="keyword-tags">
                            ${question.keywords.map(kw => `
                                <span class="keyword-tag ${keywordResult.found.includes(kw.toLowerCase()) ? 'found' : 'missing'}">${kw}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = '';
        }
    }

    toggleAnswer() {
        const answerBox = document.getElementById('answerBox');
        const toggleBtn = document.getElementById('toggleAnswerBtn');
        if (answerBox && toggleBtn) {
            answerBox.classList.toggle('hidden');
            if (answerBox.classList.contains('hidden')) {
                toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Lihat Jawaban';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Sembunyikan Jawaban';
            }
        }
    }

    navigateQuestion(direction) {
        const questions = this.currentSection === 'pg' ? this.shuffledPG : this.shuffledEssay;
        const newIndex = this.currentQuestionIndex + direction;

        if (newIndex >= 0 && newIndex < questions.length) {
            this.currentQuestionIndex = newIndex;
            this.loadQuestion();
            this.updateNavButtons();
        } else if (direction > 0 && this.currentSection === 'pg') {
            // Move to essay section
            this.switchSection('essay');
        } else if (direction < 0 && this.currentSection === 'essay' && this.currentQuestionIndex === 0) {
            // Move back to last PG question
            this.currentSection = 'pg';
            this.currentQuestionIndex = this.shuffledPG.length - 1;
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.section === 'pg');
            });
            document.getElementById('pgNav').style.display = 'block';
            document.getElementById('essayNav').style.display = 'none';
            this.loadQuestion();
            this.updateNavButtons();
        }
    }

    updateNavButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        const isFirstQuestion = this.currentSection === 'pg' && this.currentQuestionIndex === 0;
        const isLastQuestion = this.currentSection === 'essay' && 
                              this.currentQuestionIndex === essayQuestions.length - 1;

        prevBtn.disabled = isFirstQuestion;
        
        if (isLastQuestion) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    updateNavHighlight() {
        // Update PG nav
        document.querySelectorAll('#pgNav .nav-btn').forEach((btn, idx) => {
            const questionId = this.shuffledPG[idx].id;
            const question = this.shuffledPG[idx];
            btn.classList.remove('current', 'answered', 'correct', 'wrong');
            
            if (this.currentSection === 'pg' && idx === this.currentQuestionIndex) {
                btn.classList.add('current');
            }
            if (this.answeredPG[questionId] !== undefined) {
                btn.classList.add('answered');
                // Add correct/wrong indicator
                if (this.userAnswers.pg[questionId] === question.correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Update Essay nav
        document.querySelectorAll('#essayNav .nav-btn').forEach((btn, idx) => {
            const questionId = this.shuffledEssay[idx].id;
            btn.classList.remove('current', 'answered');
            
            if (this.currentSection === 'essay' && idx === this.currentQuestionIndex) {
                btn.classList.add('current');
            }
            if (this.userAnswers.essay[questionId]) {
                btn.classList.add('answered');
            }
        });
    }

    updateProgress() {
        const pgAnswered = Object.keys(this.answeredPG).length;
        const essayAnswered = Object.keys(this.userAnswers.essay).length;
        const total = this.shuffledPG.length + this.shuffledEssay.length;
        const answered = pgAnswered + essayAnswered;

        document.getElementById('answeredCount').textContent = answered;
        document.getElementById('totalQuestions').textContent = total;
        document.getElementById('progressFill').style.width = `${(answered / total) * 100}%`;
    }

    showSubmitConfirmation() {
        const pgAnswered = Object.keys(this.answeredPG).length;
        const essayAnswered = Object.keys(this.userAnswers.essay).length;
        const pgUnanswered = this.shuffledPG.length - pgAnswered;
        const essayUnanswered = this.shuffledEssay.length - essayAnswered;

        let message = 'Apakah Anda yakin ingin mengumpulkan jawaban?';
        
        if (pgUnanswered > 0 || essayUnanswered > 0) {
            message += `\n\nPerhatian:\n- ${pgUnanswered} soal PG belum dijawab\n- ${essayUnanswered} soal esai belum dijawab`;
        }

        if (confirm(message)) {
            this.submitQuiz();
        }
    }

    submitQuiz() {
        // Calculate PG score
        let pgCorrect = 0;
        this.shuffledPG.forEach(q => {
            if (this.userAnswers.pg[q.id] === q.correctAnswer) {
                pgCorrect++;
            }
        });

        // Calculate Essay score based on keywords
        let totalEssayKeywordScore = 0;
        let essayAnswered = 0;
        this.shuffledEssay.forEach(q => {
            if (this.userAnswers.essay[q.id]) {
                essayAnswered++;
                const result = this.checkKeywords(this.userAnswers.essay[q.id], q.keywords);
                totalEssayKeywordScore += result.percentage;
            }
        });
        const avgEssayScore = essayAnswered > 0 ? Math.round(totalEssayKeywordScore / this.shuffledEssay.length) : 0;

        const pgPercentage = Math.round((pgCorrect / this.shuffledPG.length) * 100);
        
        // Combined score: 60% PG + 40% Essay
        const totalScore = Math.round((pgPercentage * 0.6) + (avgEssayScore * 0.4));

        // Show result screen
        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.remove('hidden');

        // Update result display
        document.getElementById('resultStudentInfo').textContent = `${this.studentName} (${this.studentNIM})`;
        document.getElementById('pgScore').textContent = `${pgCorrect}/${this.shuffledPG.length}`;
        document.getElementById('pgPercentage').textContent = `${pgPercentage}%`;
        document.getElementById('essayScore').textContent = `${essayAnswered}/${this.shuffledEssay.length} dijawab`;
        document.getElementById('essayPercentage').textContent = `Skor keyword: ${avgEssayScore}%`;
        document.getElementById('totalScore').textContent = totalScore;

        // Update result icon based on score
        const resultIcon = document.getElementById('resultIcon');
        if (totalScore >= 80) {
            resultIcon.innerHTML = '<i class="fas fa-trophy" style="color: #ffc107;"></i>';
        } else if (totalScore >= 60) {
            resultIcon.innerHTML = '<i class="fas fa-medal" style="color: #9e9e9e;"></i>';
        } else {
            resultIcon.innerHTML = '<i class="fas fa-book" style="color: #667eea;"></i>';
        }
    }

    showReview() {
        document.getElementById('resultScreen').classList.add('hidden');
        document.getElementById('reviewScreen').classList.remove('hidden');

        const container = document.getElementById('reviewContainer');
        container.innerHTML = '';

        // PG Review
        container.innerHTML += '<h2 class="review-section-title"><i class="fas fa-list-ol"></i> Pilihan Ganda</h2>';
        
        this.shuffledPG.forEach((q, idx) => {
            const userAnswer = this.userAnswers.pg[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            
            container.innerHTML += `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-question-header">
                        <span class="review-question-num">Soal ${idx + 1}</span>
                        <span class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? '<i class="fas fa-check"></i> Benar' : '<i class="fas fa-times"></i> Salah'}
                        </span>
                    </div>
                    <div class="review-question-text">${q.question}</div>
                    <div class="review-options">
                        ${q.options.map((opt, optIdx) => {
                            let classes = 'review-option';
                            if (optIdx === userAnswer && optIdx !== q.correctAnswer) {
                                classes += ' user-answer';
                            }
                            if (optIdx === q.correctAnswer) {
                                classes += ' correct-answer';
                            }
                            return `
                                <div class="${classes}">
                                    <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
                                    ${optIdx === userAnswer && optIdx !== q.correctAnswer ? ' <span style="color:#f44336;">(Jawaban Anda)</span>' : ''}
                                    ${optIdx === q.correctAnswer ? ' <span style="color:#4caf50;">✓ Jawaban Benar</span>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="review-explanation">
                        <h4><i class="fas fa-lightbulb"></i> Penjelasan:</h4>
                        <p>${q.explanation}</p>
                    </div>
                </div>
            `;
        });

        // Essay Review
        container.innerHTML += '<h2 class="review-section-title"><i class="fas fa-pen"></i> Esai</h2>';
        
        this.shuffledEssay.forEach((q, idx) => {
            const userAnswer = this.userAnswers.essay[q.id] || '(Tidak dijawab)';
            const keywordResult = this.userAnswers.essay[q.id] ? this.checkKeywords(userAnswer, q.keywords) : null;
            
            container.innerHTML += `
                <div class="review-item">
                    <div class="review-question-header">
                        <span class="review-question-num">Soal ${idx + 1}</span>
                        ${keywordResult ? `<span class="review-status ${keywordResult.percentage >= 70 ? 'correct' : keywordResult.percentage >= 40 ? 'medium' : 'incorrect'}">
                            Skor Keyword: ${keywordResult.percentage}%
                        </span>` : ''}
                    </div>
                    <div class="review-question-text">${q.question}</div>
                    <div class="review-essay-answer">
                        <h4><i class="fas fa-user"></i> Jawaban Anda:</h4>
                        <p>${userAnswer}</p>
                    </div>
                    ${keywordResult ? `
                        <div class="keyword-review">
                            <h4><i class="fas fa-key"></i> Kata Kunci (${keywordResult.found.length}/${q.keywords.length} ditemukan):</h4>
                            <div class="keyword-tags">
                                ${q.keywords.map(kw => `
                                    <span class="keyword-tag ${keywordResult.found.includes(kw.toLowerCase()) ? 'found' : 'missing'}">${kw}</span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    <div class="review-key-answer">
                        <h4><i class="fas fa-key"></i> Kunci Jawaban:</h4>
                        <p>${q.keyAnswer.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `;
        });
    }

    backToResult() {
        document.getElementById('reviewScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.remove('hidden');
    }

    resetQuiz() {
        // Reset all data
        this.currentSection = 'pg';
        this.currentQuestionIndex = 0;
        this.userAnswers = { pg: {}, essay: {} };
        this.answeredPG = {};
        
        // Shuffle questions again for new attempt
        this.shuffleQuestions();
        
        // Reset UI
        document.getElementById('studentName').value = '';
        document.getElementById('studentNIM').value = '';
        
        // Show start screen
        document.getElementById('resultScreen').classList.add('hidden');
        document.getElementById('reviewScreen').classList.add('hidden');
        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('startScreen').classList.remove('hidden');
    }
}

// Initialize quiz when DOM is loaded
let quiz;
document.addEventListener('DOMContentLoaded', () => {
    quiz = new QuizApp();
});
