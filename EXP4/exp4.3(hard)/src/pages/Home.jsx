import { Link } from "react-router";

function Home() {

  return (
    <>
      <style>{`

        .home-page {
  flex: 1;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 8% 15%, rgba(99, 102, 241, 0.08), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.06), transparent 40%),
    var(--bg);
  padding: 60px 30px;
  animation: fadeSlideIn 0.5s ease;
}

.home-container {
  max-width: 1180px;
  margin: auto;
  width: 100%;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 60px;
  align-items: center;
}

/* LEFT CONTENT */

.home-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--accent-1);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  box-shadow: var(--shadow-card);
}

.home-title {
  margin: 24px 0 0;
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -1.2px;
  color: var(--ink);
}

.home-title span {
  font-style: normal;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.home-description {
  max-width: 460px;
  margin: 22px 0 0;
  color: var(--slate);
  font-size: 16px;
  line-height: 1.65;
}

.home-buttons {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
}

.home-primary-btn,
.home-secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.home-primary-btn {
  background: var(--gradient);
  color: #ffffff;
  border: none;
  box-shadow: var(--shadow-btn);
}

.home-primary-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 32px rgba(99, 102, 241, 0.35);
}

.home-secondary-btn {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--line);
}

.home-secondary-btn:hover {
  border-color: var(--accent-1);
  color: var(--accent-1);
  transform: translateY(-3px) scale(1.02);
}

/* RIGHT PREVIEW */

.home-preview {
  display: flex;
  justify-content: center;
}

.preview-card {
  width: 100%;
  max-width: 400px;
  padding: 28px;
  border-radius: var(--radius-lg);
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.preview-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
}

.preview-dots {
  display: flex;
  gap: 5px;
}

.preview-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--line);
}

.preview-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.preview-stat {
  padding: 16px;
  background: var(--bg);
  border-radius: var(--radius-sm);
}

.preview-stat-label {
  color: var(--slate);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.preview-stat-value {
  margin-top: 6px;
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 800;
  color: var(--ink);
}

.preview-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-student {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
}

.preview-avatar {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--gradient);
  color: #ffffff;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
}

.preview-student-info {
  flex: 1;
  min-width: 0;
}

.preview-student-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-student-course {
  margin-top: 2px;
  font-size: 11px;
  color: var(--slate);
}

.preview-status {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--sage-bg);
  color: var(--sage);
  font-size: 10px;
  font-weight: 700;
}

@media (max-width: 950px) {

  .home-container {
    grid-template-columns: 1fr;
  }

  .home-title {
    font-size: 38px;
  }

  .home-description {
    max-width: none;
  }

  .home-preview {
    order: -1;
  }

}

@media (max-width: 500px) {

  .home-page {
    padding: 40px 18px;
  }

  .home-title {
    font-size: 32px;
  }

  .home-buttons {
    flex-direction: column;
    align-items: stretch;
  }

}

      `}</style>

      <div className="home-page">

        <div className="home-container">

          {/* LEFT CONTENT */}

          <div className="home-content">

            <div className="home-badge">
              ✦ Student Records, Kept Properly
            </div>

            <h1 className="home-title">
              Every student,
              <br />
              on the <span>record.</span>
            </h1>

            <p className="home-description">
              StudentHub keeps enrolment, academic performance and
              contact details in one organised register — built for
              administrators who need to find a student's file in
              seconds, not scroll through spreadsheets.
            </p>


            <div className="home-buttons">

              <Link
                to="/dashboard"
                className="home-primary-btn"
              >
                Open Dashboard →
              </Link>

              <Link
                to="/login"
                className="home-secondary-btn"
              >
                Admin Login
              </Link>

            </div>

          </div>


          {/* RIGHT PREVIEW */}

          <div className="home-preview">

            <div className="preview-card index-card">

              <div className="preview-header">

                <div className="preview-title">
                  Student Overview
                </div>

                <div className="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>


              {/* Statistics */}

              <div className="preview-stats">

                <div className="preview-stat">

                  <div className="preview-stat-label">
                    TOTAL STUDENTS
                  </div>

                  <div className="preview-stat-value">
                    10
                  </div>

                </div>


                <div className="preview-stat">

                  <div className="preview-stat-label">
                    ACTIVE
                  </div>

                  <div className="preview-stat-value">
                    7
                  </div>

                </div>

              </div>


              {/* Student Preview */}

              <div className="preview-list">

                <div className="preview-student">

                  <div className="preview-avatar">
                    P
                  </div>

                  <div className="preview-student-info">

                    <div className="preview-student-name">
                      Priya Verma
                    </div>

                    <div className="preview-student-course">
                      BCA • Grade B+
                    </div>

                  </div>

                  <div className="preview-status">
                    Active
                  </div>

                </div>


                <div className="preview-student">

                  <div className="preview-avatar">
                    R
                  </div>

                  <div className="preview-student-info">

                    <div className="preview-student-name">
                      Rahul Singh
                    </div>

                    <div className="preview-student-course">
                      MCA • Grade A+
                    </div>

                  </div>

                  <div
                    className="preview-status"
                    style={{
                      background: "var(--rust-bg)",
                      color: "var(--rust)"
                    }}
                  >
                    Inactive
                  </div>

                </div>


                <div className="preview-student">

                  <div className="preview-avatar">
                    S
                  </div>

                  <div className="preview-student-info">

                    <div className="preview-student-name">
                      Sneha Gupta
                    </div>

                    <div className="preview-student-course">
                      B.Sc IT • Grade A
                    </div>

                  </div>

                  <div className="preview-status">
                    Active
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
