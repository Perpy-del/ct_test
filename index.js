document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart');

  async function getData() {
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    fetch('https://my-app.com/auth', {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.warn(error);
      });
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
        // Additional diagnostics
      ],
      lab_results: [
        'Blood Tests',
        'CT Scans',
        // More lab results
      ],
    },
  ];

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
          backgroundColor: '#E66FD2'
        },
        {
          label: 'Diastolic',
          data: [110, 65, 110, 90, 70, 80],
          borderWidth: 3,
          borderColor: "#7E6CAB",
          pointBackgroundColor: '#7E6CAB',
          backgroundColor: '#7E6CAB'
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
          }
      }
    },
  });

  getData();
});
