import { Link } from "react-router";

function StudentList({ students, deleteStudent }) {

  const handleDelete = (id, name) => {
    const confirmed = window.confirm(
      `Delete ${name}? This can't be undone.`
    );

    if (confirmed) {
      deleteStudent(id);
    }
  };

  return (
    <>
      <style>{`

        .students-section {
          margin-top: 6px;
        }

        .students-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .students-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.3px;
        }

        .students-subtitle {
          margin: 5px 0 0;
          color: var(--slate);
          font-size: 13.5px;
        }

        .student-count {
          padding: 8px 16px;
          border-radius: 999px;
          background: var(--gradient-soft);
          color: var(--accent-1);
          font-size: 12.5px;
          font-weight: 700;
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .student-card {
          padding: 22px;
          border-radius: var(--radius-lg);
        }

        .student-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
        }

        .student-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .student-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .student-avatar {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--gradient);
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
        }

        .student-name {
          margin: 0;
          font-size: 15.5px;
          font-weight: 700;
          color: var(--ink);
        }

        .student-id {
          margin: 3px 0 0;
          color: var(--muted);
          font-size: 11.5px;
        }

        .status {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .status.active {
          background: var(--sage-bg);
          color: var(--sage);
        }

        .status.inactive {
          background: var(--rust-bg);
          color: var(--rust);
        }

        .status.graduated {
          background: var(--brass-bg);
          color: var(--brass);
        }

        .student-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .detail-item {
          min-width: 0;
        }

        .detail-label {
          display: block;
          margin-bottom: 4px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          display: block;
          color: var(--ink-soft);
          font-size: 13.5px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .student-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
        }

        .student-grade {
          color: var(--slate);
          font-size: 12.5px;
        }

        .grade {
          margin-left: 4px;
          color: var(--ink);
          font-size: 14px;
          font-weight: 700;
        }

        .profile-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 9px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .profile-btn:hover {
          background: var(--gradient);
          border-color: transparent;
          color: #ffffff;
          transform: scale(1.02);
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .delete-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 9px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--rust-bg);
          background: transparent;
          color: var(--rust);
          font-size: 12px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .delete-btn:hover {
          background: var(--rust);
          border-color: var(--rust);
          color: white;
          transform: scale(1.02);
        }

        @media (max-width: 800px) {

          .students-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 500px) {

          .students-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .student-details {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

      <section className="students-section">

        <div className="students-header">

          <div>
            <h2 className="students-title">
              Student Directory
            </h2>

            <p className="students-subtitle">
              Browse and manage all registered students.
            </p>
          </div>

          <div className="student-count">
            {students.length} Students
          </div>

        </div>


        <div className="students-grid">

          {students.map((student) => (

            <article
              className={`student-card index-card ${student.status.toLowerCase()}`}
              key={student.id}
            >

              <div className="student-top">

                <div className="student-info">

                  <div className="student-avatar">
                    {student.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="student-name">
                      {student.name}
                    </h3>

                    <p className="student-id">
                      ID #{String(student.id).padStart(4, "0")}
                    </p>

                  </div>

                </div>

                <span
                  className={`status ${student.status.toLowerCase()}`}
                >
                  {student.status}
                </span>

              </div>


              <div className="student-details">

                <div className="detail-item">
                  <span className="detail-label">
                    Course
                  </span>

                  <span className="detail-value">
                    {student.course}
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Age
                  </span>

                  <span className="detail-value">
                    {student.age} Years
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Email
                  </span>

                  <span className="detail-value">
                    {student.email}
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Location
                  </span>

                  <span className="detail-value">
                    {student.address}
                  </span>
                </div>

              </div>


              <div className="student-footer">

                <div className="student-grade">
                  Grade:
                  <span className="grade">
                    {student.grade}
                  </span>
                </div>

                <div className="card-actions">

                  <Link
                    className="profile-btn"
                    to={`/dashboard/profile/${student.id}`}
                  >
                    View Profile →
                  </Link>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(student.id, student.name)}
                    aria-label={`Delete ${student.name}`}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>
    </>
  );
}

export default StudentList;