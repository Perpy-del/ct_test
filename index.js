document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart');
  const chartResults = document.querySelector('.myChart');
  const diagnosis = document.querySelector('.diagnosis_history');
  const diagnosticTable = document.querySelector('.diagnostic_table');
  const userProfile = document.querySelector('.right_side');
  const labResults = document.getElementById('lab_results');

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Get the components of the date
    const day = date.getDate();
    const month = monthNames[date.getMonth()]; // getMonth() returns 0-11
    const year = date.getFullYear();
    
    // Return the formatted date string
    return `${month} ${day}, ${year}`;
  }

  const data = [
    {
      name: 'Jessica Taylor',
      gender: 'Female',
      age: 28,
      profile_picture: 'https://fedskillstest.ct.digital/4.png',
      date_of_birth: '1996-08-23',
      phone_number: '(415) 555-1234',
      emergency_contact: '(415) 555-5678',
      insurance_type: 'Sunrise Health Assurance',
      diagnosis_history: [
        {
          month: 'March',
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: 'Higher than Average',
            },
            diastolic: {
              value: 78,
              levels: 'Lower than Average',
            },
          },
          heart_rate: {
            value: 78,
            levels: 'Lower than Average',
          },
          respiratory_rate: {
            value: 20,
            levels: 'Normal',
          },
          temperature: {
            value: 98.6,
            levels: 'Normal',
          },
        },
        // Additional months of diagnostic history
      ],
      diagnostic_list: [
        {
          name: 'Hypertension',
          description: 'Chronic high blood pressure',
          status: 'Under Observation',
        },
        {
          name: 'Type 2 Diabetes',
          description: 'Insulin resistance and elevated blood sugar',
          status: 'Cured',
        },
        {
          name: 'Asthma',
          description: 'Recurrent episodes of bronchial constriction',
          status: 'Inactive',
        },
        {
          name: 'Osteoarthritis',
          description: 'Degenerative joint disease',
          status: 'Untreated',
        },
        // Additional diagnostics
      ],
      lab_results: [
        'Blood Tests',
        'CT Scans',
        'Radiology Reports',
        'X-Rays',
        'Urine Test',
        // More lab results
      ],
    },
  ];

  const jessicaHealthData = `
  <div class="chart_info" style="padding-top: 30px;">
    <div class="systolic" style="padding-bottom: 25px;">
      <div class="heading">
        <h4>Systolic</h4>
      </div>
      <h1>${data[0].diagnosis_history[0].blood_pressure.systolic.value}</h1>
      <div style="display: flex; gap: 3px">
        <img src="/images/ArrowUp.svg" alt="ArrowUp" />
        <h6>${data[0].diagnosis_history[0].blood_pressure.systolic.levels}</h6>
      </div>
    </div>
    <div class="diastolic">
      <div class="heading">
        <h4>Diastolic</h4>
      </div>
      <h1>${data[0].diagnosis_history[0].blood_pressure.diastolic.value}</h1>
      <div style="display: flex; gap: 3px">
        <img src="/images/ArrowDown.svg" alt="ArrowDown" />
        <h6>${data[0].diagnosis_history[0].blood_pressure.diastolic.levels}</h6>
      </div>
    </div>
  </div>`;

  const jessicaDiagnosis = `
    <div class="patient_stats">
      <div class="respiratory_rate">
        <img
          src="/images/respiratory rate.svg"
          alt="Respiratory Rate"
        />
        <h5>Respiratory Rate</h5>
        <h2>${data[0].diagnosis_history[0].respiratory_rate.value} bpm</h2>
        <h6>${data[0].diagnosis_history[0].respiratory_rate.levels}</h6>
      </div>
      <div class="temperature">
        <img src="/images/temperature.svg" alt="Temperature" />
        <h5>Temperature</h5>
        <h2>${data[0].diagnosis_history[0].temperature.value}°F</h2>
        <h6>${data[0].diagnosis_history[0].temperature.levels}</h6>
      </div>
      <div class="heart_rate">
        <img src="/images/HeartBPM.svg" alt="Respiratory Rate" />
        <h5>Heart Rate</h5>
        <h2>${data[0].diagnosis_history[0].heart_rate.value} bpm</h2>
        <div>
          <img src="/images/ArrowDown.svg" alt="Arrow Down" />
          <h6>${data[0].diagnosis_history[0].heart_rate.levels}</h6>
        </div>
      </div>
    </div>`;
  
  const jessicaUserProfile = `
    <div class="user_profile">
      <div class="user_detail">
        <img src=${data[0].profile_picture} alt="User profile" width="150px" height="150px" >
        <h3>${data[0].name}</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; flex-direction: row; gap: 1rem;">
          <img src="/images/BirthIcon.svg" alt="DOB Icon">
          <div>
            <span style="font-size: 14px; display: block;">Date of Birth</span>
            <span style="font-size: 14px; font-weight: bold;">${formatDate(data[0].date_of_birth)}</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 1rem;">
          <img src="/images/FemaleIcon.svg" alt="Female Icon">
          <div>
            <span style="font-size: 14px; display: block;">Gender</span>
            <span style="font-size: 14px; font-weight: bold;">${data[0].gender}</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 1rem;">
          <img src="/images/PhoneIcon.svg" alt="Phone Icon">
          <div>
            <span style="font-size: 14px; display: block;">Contact Info</span>
            <span style="font-size: 14px; font-weight: bold;">${data[0].phone_number}</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 1rem;">
          <img src="/images/PhoneIcon.svg" alt="Phone Icon">
          <div>
            <span style="font-size: 14px; display: block;">Emergency Contacts</span>
            <span style="font-size: 14px; font-weight: bold;">${data[0].emergency_contact}</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 1rem; padding-bottom: 40px;">
          <img src="/images/InsuranceIcon.svg" alt="Insurance Icon">
          <div>
            <span style="font-size: 14px; display: block;">Insurance Provider</span>
            <span style="font-size: 14px; font-weight: bold;">${data[0].insurance_type}</span>
          </div>
        </div>
        <button class="info_button">
          Show All Information
        </button>
      </div>
    </div>
  `

  function createDiagnosticTable() {
    const diagnosticTableBody = document.createElement('tbody');

    const jessicaDiagnosticList = data[0].diagnostic_list;

    jessicaDiagnosticList.forEach(list => {
      const tableRow = document.createElement('tr');
      const tableDataName = document.createElement('td');
      tableDataName.innerHTML = `${list.name}`;
      const tableDataDesc = document.createElement('td');
      tableDataDesc.innerHTML = `${list.description}`;
      const tableDataStatus = document.createElement('td');
      tableDataStatus.innerHTML = `${list.status}`;

      tableRow.appendChild(tableDataName);
      tableRow.appendChild(tableDataDesc);
      tableRow.appendChild(tableDataStatus);
      diagnosticTableBody.appendChild(tableRow);
    });

    diagnosticTable.insertAdjacentElement('beforeend', diagnosticTableBody);
  }

  function updateLabResults() {
    data[0].lab_results.map((result) => {
      const resultContainer = document.createElement('div');
      const spanContainer = document.createElement('span');
      spanContainer.innerHTML = result;
      const downloadIcon = `<img src="/images/download.svg" alt="Download">`

      resultContainer.appendChild(spanContainer);
      resultContainer.insertAdjacentHTML('beforeend', downloadIcon);

      labResults.appendChild(resultContainer);
    })
  }

  chartResults.insertAdjacentHTML('beforeend', jessicaHealthData);
  diagnosis.insertAdjacentHTML('beforeend', jessicaDiagnosis);
  userProfile.insertAdjacentHTML('afterbegin', jessicaUserProfile)

  // async function getData() {
  //   let username = 'coalition';
  //   let password = 'skills-test';
  //   let auth = btoa(`${username}:${password}`);
  //   fetch('https://my-app.com/auth', {
  //     headers: {
  //       Authorization: `Basic ${auth}`,
  //     },
  //   })
  //     .then(function (response) {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.warn(error);
  //     });
  // }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Oct, 2023',
        'Nov, 2023',
        'Dec, 2023',
        'Jan, 2024',
        'Feb, 2024',
        'March, 2024',
      ],
      datasets: [
        {
          label: 'Systolic',
          data: [120, 118, 160, 110, 150, 160],
          borderWidth: 3,
          borderColor: '#E66FD2',
          pointBackgroundColor: '#E66FD2',
          backgroundColor: '#E66FD2',
        },
        {
          label: 'Diastolic',
          data: [110, 65, 110, 90, 70, 78],
          borderWidth: 3,
          borderColor: '#7E6CAB',
          pointBackgroundColor: '#7E6CAB',
          backgroundColor: '#7E6CAB',
        },
      ],
    },
    options: {
      pointBorderWidth: 2,
      padding: '16px',
      tension: 0.4,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        customCanvasBackgroundColor: {
          color: '#F4F0FE',
        },
      },
    },
  });

  // getData();
  createDiagnosticTable();
  updateLabResults();
});
