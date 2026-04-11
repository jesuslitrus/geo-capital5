import {
  createCode,
  getAllCodes,
  deleteCode,
  resetCode
} from "../../services/adminService.js";



  export async function renderAdmin(app) {

   

  app.innerHTML = `
  <h2 style="text-align:center;">⚙️ Panel Admin</h2>

  <div style="display:flex; gap:10px; margin-bottom:20px;">
    <input 
      id="new-code" 
      placeholder="Nueva contraseña"
      style="flex:1; padding:12px; font-size:16px;"
    />
    <button 
      id="create-btn"
      style="padding:12px 16px; font-size:16px;"
    >
      Crear
    </button>
  </div>

  <div id="codes-list"></div>
`;

  // 👉 CREAR CÓDIGO
  document.getElementById("create-btn").onclick = async () => {
    const input = document.getElementById("new-code");
    const value = input.value.trim();

    if (!value) return;

    await createCode(value);
    renderAdmin(app);
  };

  const list = document.getElementById("codes-list");

  const codes = await getAllCodes();

  codes.forEach(c => {

    const row = document.createElement("div");

    row.style.display = "flex";
row.style.justifyContent = "space-between";
row.style.alignItems = "center";
row.style.border = "2px solid #ccc";
row.style.padding = "15px";
row.style.marginBottom = "15px";
row.style.width = "100%";
row.style.boxSizing = "border-box";

    // 👉 TEXTO
    const info = document.createElement("div");
   
    info.innerHTML = `
  <div style="font-size:18px;"><strong>${c.code}</strong></div>
  <div style="font-size:14px;">
    Estado: ${c.used ? "❌ usado" : "✅ libre"}
  </div>
`;

    // 👉 BOTONES
    const actions = document.createElement("div");

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.style.padding = "8px 12px";
    resetBtn.style.fontSize = "14px";

    resetBtn.onclick = async () => {
      await resetCode(c.id);
      renderAdmin(app);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.style.padding = "8px 12px";
deleteBtn.style.fontSize = "14px";
deleteBtn.style.marginLeft = "10px";

    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = async () => {
      await deleteCode(c.id);
      renderAdmin(app);
    };

    actions.appendChild(resetBtn);
    actions.appendChild(deleteBtn);

    row.appendChild(info);
    row.appendChild(actions);

    list.appendChild(row);
  });
}