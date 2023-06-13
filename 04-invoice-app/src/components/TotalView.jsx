
export const TotalView = ({ total }) => {
  return (
    <>
        <div className="text-end p-2">
            <span className="badge bg-success">
                { total }
            </span>
        </div>
    </>
  )
}
