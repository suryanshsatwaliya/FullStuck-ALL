import { Link, Outlet } from "react-router";

function Dashboard({ students }) {

  const activeStudents = students.filter(
    student => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    student => student.status === "Inactive"
  ).length;

  const graduatedStudents = students.filter(
    student => student.status === "Graduated"
  ).length;

  const totalStudents = students.length;

  return (
    <>
      <style>{`

        .dashboard-page {
          flex: 1;
          background: var(--bg);
          padding: 44px 30px 70px;
        }

        .dashboard-wrapper {
          max-width: 1180px;
          margin: auto;
          animation: fadeSlideIn 0.4s ease;
        }

        /* HEADER */

        .dashboard-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 22px;
          margin-bottom: 30px;
        }

        .dashboard-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--ink);
        }

        .dashboard-subtitle {
          margin: 8px 0 0;
          color: var(--slate);
          font-size: 14.5px;
        }

        .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--accent-1);
          font-size: 12.5px;
          font-weight: 700;
          box-shadow: var(--shadow-card);
        }

        /* STATISTICS */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 26px;
        }

        .stat-card {
          padding: 24px;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-lg);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
        }

        .stat-icon-badge {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 19px;
          margin-bottom: 14px;
        }

        .stat-card.total .stat-icon-badge {
          background: var(--gradient-soft);
          color: var(--accent-1);
        }
        .stat-card.active .stat-icon-badge {
          background: var(--sage-bg);
          color: var(--sage);
        }
        .stat-card.inactive .stat-icon-badge {
          background: var(--rust-bg);
          color: var(--rust);
        }
        .stat-card.graduated .stat-icon-badge {
          background: var(--brass-bg);
          color: var(--brass);
        }

        .stat-label {
          color: var(--slate);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1px;
        }

        .stat-number {
          margin-top: 6px;
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.5px;
        }

        /* MANAGEMENT */

        .management-card {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--gradient);
          border-radius: var(--radius-lg);
          padding: 36px;
          margin-bottom: 32px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
        }

        .management-content {
          position: relative;
          z-index: 2;
        }

        .management-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
        }

        .management-description {
          margin: 8px 0 24px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14.5px;
          max-width: 420px;
        }

        .management-buttons {
          display: flex;
          gap: 12px;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .primary-btn {
          background: #ffffff;
          color: var(--accent-1);
        }

        .primary-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px) scale(1.02);
        }

        .management-decoration {
          position: absolute;
          right: 10px;
          bottom: -30px;
          font-size: 140px;
          opacity: 0.15;
          transform: rotate(-8deg);
        }

        /* OUTLET */

        .outlet-container {
          animation: fadeSlideIn 0.35s ease;
        }

        @media (max-width: 950px) {

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .management-decoration {
            display: none;
          }

        }

        @media (max-width: 650px) {

          .dashboard-page {
            padding: 28px 16px 50px;
          }

          .dashboard-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .dashboard-title {
            font-size: 30px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .management-card {
            padding: 26px;
          }

          .management-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            justify-content: center;
          }

        }

      `}</style>

      <main className="dashboard-page">

        <div className="dashboard-wrapper">

          {/* HEADER */}

          <div className="dashboard-top">

            <div>
              <h1 className="dashboard-title">
                Dashboard
              </h1>

              <p className="dashboard-subtitle">
                Manage and monitor your students in one place.
              </p>
            </div>

            <div className="welcome-badge">
              ✦ Student Management
            </div>

          </div>


          {/* STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card index-card total">
              <div className="stat-icon-badge">🎓</div>
              <div>
                <div className="stat-label">
                  Total Students
                </div>

                <div className="stat-number">
                  {totalStudents}
                </div>
              </div>
            </div>


            <div className="stat-card index-card active">
              <div className="stat-icon-badge">✓</div>
              <div>
                <div className="stat-label">
                  Active Students
                </div>

                <div className="stat-number">
                  {activeStudents}
                </div>
              </div>
            </div>


            <div className="stat-card index-card inactive">
              <div className="stat-icon-badge">✕</div>
              <div>
                <div className="stat-label">
                  Inactive Students
                </div>

                <div className="stat-number">
                  {inactiveStudents}
                </div>
              </div>
            </div>


            <div className="stat-card index-card graduated">
              <div className="stat-icon-badge">★</div>
              <div>
                <div className="stat-label">
                  Graduated Students
                </div>

                <div className="stat-number">
                  {graduatedStudents}
                </div>
              </div>
            </div>

          </div>


          {/* MANAGEMENT */}

          <section className="management-card">

            <div className="management-content">

              <h2 className="management-title">
                Student Management
              </h2>

              <p className="management-description">
                Add new students or browse your complete student directory.
              </p>

              <div className="management-buttons">

                <Link
                  to="addstudent"
                  className="primary-btn"
                >
                  ＋ Add New Student
                </Link>

                <Link
                  to="studentlist"
                  className="secondary-btn"
                >
                  View All Students →
                </Link>

              </div>

            </div>

            <div className="management-decoration">
              🎓
            </div>

          </section>


          {/* NESTED ROUTES */}

          <div className="outlet-container">
            <Outlet />
          </div>

        </div>

      </main>
    </>
  );
}

export default Dashboard;