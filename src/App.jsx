// import React from 'react';
import './App.css';

const DropdownTable = () => {
  // Function to handle the dropdown selection
  const handleDropdownSelection = (value) => {
    //  logic to handle the dropdown selection
    console.log('Selected value ', value);
  };

  return (
    <div>
      <header className='header'>
        <img src='images/Atleos Logo.png' alt='Logo' />
        <nav>
          <h2>SOUP Customer Interface Dashboard</h2>
        </nav>
      </header>
      <div className='container'>
        <table className='filter-table table-1'>
          <thead>
            <tr>
              <th colSpan='3'>Select Filter To Display Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-row'>
              <td>Interface ID </td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>AssetID</td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>CallRef</td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>W/O # </td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>Transaction Type</td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>MCN # </td>
              <td>
                <div className='dropdown'>
                  <button className='dropbtn'>Equals</button>
                  <div className='dropdown-content'>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Equals')}
                    >
                      Equals
                    </a>
                    <a
                      href='#'
                      onClick={() => handleDropdownSelection('Begins With')}
                    >
                      Begins With
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type='text' className='form-control' />
              </td>
            </tr>
          </tbody>
        </table>
        <table className='filter-table table-2'>
          <thead>
            <tr>
              <th colSpan='2'>Filter Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-row'>
              <td>Search By</td>
              <td>
                <input type='text' id='searchBy' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>Start Date</td>
              <td>
                <input type='date' id='startDate' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>End Date</td>
              <td>
                <input type='date' id='endDate' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>Beginning Seq No.</td>
              <td>
                <input type='text' id='beginSeqNo' className='form-control' />
              </td>
            </tr>
            <tr className='table-row'>
              <td>Ending Seq. No.</td>
              <td>
                <input type='text' id='endSeqNo' className='form-control' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownTable;
