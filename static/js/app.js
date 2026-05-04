// ============================================================
// SmartBlood Connect â€” App Bootstrap (app.js)
// ============================================================

(function init() {
  currentUser = getUser();
  if (!currentUser) return;

  // Set sidebar user info
  document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('userRole').textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);

  // Render nav and default page
  renderNavLinks(currentUser.role);
  renderPage('overview');
})();// Enhanced Patient & Donor UI sections
(function(){
  function card(icon, value, label){
    return `<div class="stat-card"><div class="stat-card-icon red">${icon}</div><div class="stat-card-value">${value}</div><div class="stat-card-label">${label}</div></div>`;
  }

  const oldRenderPatientOverview = renderPatientOverview;
  renderPatientOverview = function(){
    const mine = DB.requests.filter(r => (r.patient||'').toLowerCase() === (currentUser.name||currentUser.username).toLowerCase());
    const pending = mine.filter(r=>r.status==='pending').length;
    const fulfilled = mine.filter(r=>r.status==='fulfilled').length;
    const approved = mine.filter(r=>r.status==='approved').length;
    const max = Math.max(mine.length,1);
    const p1=Math.round((pending/max)*100), p2=Math.round((approved/max)*100), p3=Math.round((fulfilled/max)*100);

    return `
      <div class="page-header">
        <h1 class="page-title">Patient Dashboard</h1>
        <p class="page-subtitle">Live request monitoring and fulfillment progress.</p>
      </div>
      <div class="stats-grid">
        ${card('??', mine.length, 'My Requests')}
        ${card('?', pending, 'Pending')}
        ${card('?', fulfilled, 'Fulfilled')}
        ${card('??', approved, 'Approved')}
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="card-header"><span class="card-title">Fulfillment Breakdown</span></div>
          <div class="card-body">
            <div class="mb-20"><div class="flex-between"><span>Pending</span><strong>${p1}%</strong></div><div class="progress-bar-wrap"><div class="progress-bar" style="width:${p1}%"></div></div></div>
            <div class="mb-20"><div class="flex-between"><span>Approved</span><strong>${p2}%</strong></div><div class="progress-bar-wrap"><div class="progress-bar" style="width:${p2}%"></div></div></div>
            <div><div class="flex-between"><span>Fulfilled</span><strong>${p3}%</strong></div><div class="progress-bar-wrap"><div class="progress-bar green" style="width:${p3}%"></div></div></div>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Recent Requests</span></div>
          <div style="overflow-x:auto"><table class="data-table"><thead><tr><th>ID</th><th>Blood</th><th>Units</th><th>Status</th></tr></thead><tbody>
            ${mine.slice(0,6).map(r=>`<tr><td class='fw-bold text-red'>${r.id}</td><td><span class='badge badge-blood'>${r.blood_type}</span></td><td>${r.units}</td><td><span class='badge ${DB.getStatusBadge ? DB.getStatusBadge(r.status) : 'badge-gray'}'>${r.status}</span></td></tr>`).join('') || `<tr><td colspan='4'>No records yet.</td></tr>`}
          </tbody></table></div>
        </div>
      </div>
    `;
  };

  renderDonorOverview = function(){
    const uname=(currentUser.name||currentUser.username).toLowerCase();
    const mine=(DB.notifications||[]).filter(n=>((n.donor||n.donor_username||'').toLowerCase()===uname));
    const responded=mine.filter(n=>n.responded).length;
    const willing=mine.filter(n=>n.donated).length;
    const rate=mine.length?Math.round((responded/mine.length)*100):0;
    const willingness=mine.length?Math.round((willing/mine.length)*100):0;

    return `
      <div class="page-header">
        <h1 class="page-title">Donor Dashboard</h1>
        <p class="page-subtitle">Donation engagement and response analytics.</p>
      </div>
      <div class="stats-grid">
        ${card('??', mine.length, 'Notifications')}
        ${card('??', responded, 'Responded')}
        ${card('??', willing, 'Willing')}
        ${card('??', rate+'%', 'Response Rate')}
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="card-header"><span class="card-title">Performance Indicators</span></div>
          <div class="card-body">
            <div class="mb-20"><div class="flex-between"><span>Response Rate</span><strong>${rate}%</strong></div><div class="progress-bar-wrap"><div class="progress-bar" style="width:${rate}%"></div></div></div>
            <div><div class="flex-between"><span>Willingness Rate</span><strong>${willingness}%</strong></div><div class="progress-bar-wrap"><div class="progress-bar green" style="width:${willingness}%"></div></div></div>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Pending Notifications</span></div>
          <div style="overflow-x:auto"><table class="data-table"><thead><tr><th>ID</th><th>Request</th><th>Status</th><th>Action</th></tr></thead><tbody>
            ${mine.map(n=>`<tr><td>${n.id}</td><td>${n.request_id}</td><td>${n.responded ? (n.donated?'Willing':'Declined') : 'Pending'}</td><td>${n.responded ? '—' : `<button class='btn-green' onclick="confirmDonate('${n.id}')">?</button> <button class='btn-outline-red' onclick="declineDonate('${n.id}')">?</button>`}</td></tr>`).join('') || `<tr><td colspan='4'>No notifications yet.</td></tr>`}
          </tbody></table></div>
        </div>
      </div>
    `;
  };
})();
