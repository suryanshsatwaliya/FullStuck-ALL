import { Link, useParams } from "react-router";

function StudentProfile({ students }) {
  const { id } = useParams();

  const student = students.find(
    (std) => std.id === Number(id)
  );

  if (!student) {
    return (
      <>
        <style>{`
          .not-found {
            padding: 60px 40px;
            text-align: center;
            background: var(--surface);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-card);
          }

          .not-found h2 {
            margin: 0 0 10px;
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 800;
            color: var(--ink);
          }

          .not-found p {
            color: var(--slate);
            margin: 0 0 24px;
            font-size: 14px;
          }

          .back-btn {
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            background: var(--gradient);
            color: white;
            padding: 12px 22px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 700;
            box-shadow: var(--shadow-btn);
            transition: all 0.2s ease;
          }

          .back-btn:hover {
            transform: translateY(-2px) scale(1.02);
          }
        `}</style>

        <div className="not-found">
          <h2>Student Not Found</h2>

          <p>
            No student exists with ID #{id}
          </p>

          <Link
            className="back-btn"
            to="/dashboard/studentlist"
          >
            ← Back to Students
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .profile-container {
          padding: 10px 0 40px;
          animation: profileFadeIn 0.45s ease;
        }

        @keyframes profileFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .profile-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.8px;
        }

        .profile-subtitle {
          margin: 6px 0 0;
          color: var(--slate);
          font-size: 13.5px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: var(--accent-1);
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          color: var(--accent-2);
          transform: translateX(-3px);
        }

        .profile-card {
          overflow: hidden;
          background: var(--surface);
          border-radius: 24px;
          box-shadow: var(--shadow-card);
        }

        .profile-banner {
          position: relative;
          height: 145px;
          background: var(--gradient);
          overflow: hidden;
        }

        .profile-banner::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -60px;
          top: -150px;
          background: rgba(255,255,255,0.16);
          border-radius: 50%;
        }

        .profile-banner::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          left: 35%;
          bottom: -140px;
          background: rgba(255,255,255,0.10);
          border-radius: 50%;
        }

        .profile-main {
          padding: 0 34px 36px;
        }

        .profile-intro {
          display: flex;
          align-items: flex-end;
          gap: 18px;
          margin-top: -48px;
          margin-bottom: 32px;
          position: relative;
          z-index: 2;
        }

        .profile-avatar {
          width: 96px;
          height: 96px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--surface);
          border: 5px solid var(--surface);
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-1);
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 800;
        }

        .profile-name {
          margin: 0 0 5px;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.5px;
        }

        .profile-id {
          margin: 0;
          color: var(--muted);
          font-size: 12.5px;
        }

        .profile-status {
          margin-left: auto;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .profile-status.active {
          background: var(--sage-bg);
          color: var(--sage);
        }

        .profile-status.inactive {
          background: var(--rust-bg);
          color: var(--rust);
        }

        .profile-status.graduated {
          background: var(--brass-bg);
          color: var(--brass);
        }

        .details-title {
          margin: 0 0 18px;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          color: var(--ink);
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .detail-box {
          padding: 19px 20px;
          background: var(--bg);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .detail-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        }

        .detail-label {
          display: block;
          margin-bottom: 7px;
          font-size: 10px;
          font-weight: 800;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .detail-value {
          display: block;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--ink-soft);
          word-break: break-word;
        }

        .grade-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .grade-value {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.25);
        }

        @media (max-width: 700px) {
          .profile-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .profile-title {
            font-size: 26px;
          }

          .profile-main {
            padding: 0 20px 25px;
          }

          .profile-intro {
            align-items: flex-start;
            flex-direction: column;
          }

          .profile-status {
            margin-left: 0;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">

        <div className="profile-header">

          <div>
            <h2 className="profile-title">
              Student Profile
            </h2>

            <p className="profile-subtitle">
              View complete student information
            </p>
          </div>

          <Link
            className="back-link"
            to="/dashboard/studentlist"
          >
            ← Back to Students
          </Link>

        </div>

        <div className="profile-card">

          <div className="profile-banner"></div>

          <div className="profile-main">

            <div className="profile-intro">

              <div className="profile-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h1 className="profile-name">
                  {student.name}
                </h1>

                <p className="profile-id">
                  Student ID: #
                  {String(student.id).padStart(4, "0")}
                </p>
              </div>

              <span
                className={`profile-status ${student.status.toLowerCase()}`}
              >
                {student.status}
              </span>


            </div>

            
            <h3 className="details-title">
              Student Information
            </h3>

            <div className="details-grid">

              <div className="detail-box">
                <span className="detail-label">
                  Full Name
                </span>

                <span className="detail-value">
                  {student.name}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Age
                </span>

                <span className="detail-value">
                  {student.age} Years
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Course
                </span>

                <span className="detail-value">
                  {student.course}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Email
                </span>

                <span className="detail-value">
                  {student.email}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Status
                </span>

                <span className="detail-value">
                  {student.status}
                </span>
              </div>

              <div className="detail-box grade-box">

                <div>
                  <span className="detail-label">
                    Grade
                  </span>

                  <span className="detail-value">
                    Academic Performance
                  </span>
                </div>

                <div className="grade-value">
                  {student.grade}
                </div>

              </div>

              <div
                className="detail-box"
                style={{ gridColumn: "1 / -1" }}
              >
                <span className="detail-label">
                  Address
                </span>

                <span className="detail-value">
                  {student.address}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default StudentProfile;
