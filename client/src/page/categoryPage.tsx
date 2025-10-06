import { useState, useEffect } from "react";
import { FaSearch, FaTrash, FaEdit } from "react-icons/fa";
import "./cssPage/categoryPage.css";

type Category = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
};

export default function CategoryPage() {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [newCategory, setNewCategory] = useState({
    id: "",
    name: "",
    status: "ACTIVE" as "ACTIVE" | "INACTIVE",
  });
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setAllCategories(data))
      .catch(() => console.error("Lỗi khi lấy dữ liệu danh mục"));
  }, []);

  useEffect(() => {
    let filtered = allCategories.filter(
      (c) =>
        (statusFilter === "" || c.status === statusFilter) &&
        (searchKeyword === "" ||
          c.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
    filtered.sort((a, b) => a.id - b.id);
    setTotalCategories(filtered.length);
    setDisplayedCategories(
      filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    );
  }, [allCategories, currentPage, statusFilter, searchKeyword]);

  const handleAddCategory = () => {
    if (!newCategory.id || !newCategory.name) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newItem: Category = {
      id: Number(newCategory.id),
      name: newCategory.name,
      status: newCategory.status,
    };
    setAllCategories((prev) => [...prev, newItem]);
    setShowAddModal(false);
    setNewCategory({ id: "", name: "", status: "ACTIVE" });
  };

  const handleDeleteCategory = () => {
    if (deleteId === null) return;
    setAllCategories((prev) => prev.filter((c) => c.id !== deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const totalPages = Math.ceil(totalCategories / itemsPerPage);

  return (
    <div className="categoryPage">
      <h1>Quản lý danh mục</h1>

      <div className="buttonAdd">
        <button onClick={() => setShowAddModal(true)}>Thêm mới danh mục</button>
      </div>

      <div className="toolbar">
        <div className="optionBar">
          <select
            value={statusFilter}
            onChange={(e) => {
              setCurrentPage(1);
              setStatusFilter(e.target.value);
            }}
          >
            <option value="">Tất cả</option>
            <option value="ACTIVE">Đang hoạt động</option>
            <option value="INACTIVE">Ngừng hoạt động</option>
          </select>

          <div className="searchBar">
            <input
              value={searchKeyword}
              onChange={(e) => {
                setCurrentPage(1);
                setSearchKeyword(e.target.value);
              }}
              placeholder="Tìm kiếm danh mục"
            />
            <FaSearch />
          </div>
        </div>
      </div>

      <div className="tableContainer">
        <table className="categoryTable">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.length === 0 ? (
              <tr>
                <td colSpan={4}>Không có dữ liệu</td>
              </tr>
            ) : (
              displayedCategories.map((c) => (
                <tr key={c.id}>
                  <td className="id">{c.id}</td>
                  <td className="nameCategory">{c.name}</td>
                  <td className="statusCategory">
                    {c.status === "ACTIVE" ? (
                      <span className="statusActivate"><div className="status-dot"></div>	&nbsp; Đang hoạt động</span>
                    ) : (
                      <span className="statusInactive"><div className="status-dot"></div>	&nbsp; Ngừng hoạt động</span>
                    )}
                  </td>
                  <td className="actions">
                    <button
                      className="btnDelete"
                      onClick={() => {
                        setDeleteId(c.id);
                        setShowDeleteModal(true);
                      }}
                    >
                      <FaTrash />
                    </button>
                    <button className="btnEdit">
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="pagination">
          <span>
            Trang {currentPage}/{totalPages} ({totalCategories} mục)
          </span>
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="modalOverlay">
          <div className="modalBox">
            <h3>Thêm mới danh mục</h3>
            <label>Mã danh mục *</label>
            <input
              value={newCategory.id}
              onChange={(e) =>
                setNewCategory({ ...newCategory, id: e.target.value })
              }
            />
            <label>Tên danh mục *</label>
            <input
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
            <label>Trạng thái</label>
            <div className="statusGroup">
              <label>
                <input
                  type="radio"
                  checked={newCategory.status === "ACTIVE"}
                  onChange={() =>
                    setNewCategory({ ...newCategory, status: "ACTIVE" })
                  }
                />
                Đang hoạt động
              </label>
              <label>
                <input
                  type="radio"
                  checked={newCategory.status === "INACTIVE"}
                  onChange={() =>
                    setNewCategory({ ...newCategory, status: "INACTIVE" })
                  }
                />
                Ngừng hoạt động
              </label>
            </div>
            <div className="modalActions">
              <button onClick={() => setShowAddModal(false)}>Hủy</button>
              <button className="addBtn" onClick={handleAddCategory}>
                Thêm
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modalOverlay">
          <div className="modalBox">
            <h3>Xác nhận</h3>
            <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
            <div className="modalActions">
              <button onClick={() => setShowDeleteModal(false)}>Hủy</button>
              <button className="deleteBtn" onClick={handleDeleteCategory}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
