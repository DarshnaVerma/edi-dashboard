import './dashboard.css';
import { Multiselect } from 'multiselect-react-dropdown';

const DropdownTable = () => {
  // Function to handle the dropdown selection
  const handleDropdownSelection = (value) => {
    //  logic to handle the dropdown selection
    console.log('Selected value ', value);
  };

  const data = [
    { Attributes: 'Customer ID,', id: 1 },
    { Attributes: 'Interface ID,', id: 2 },
    { Attributes: 'Asset ID,', id: 3 },
    { Attributes: 'Trans ID', id: 4 },
    { Attributes: 'Call Ref', id: 5 },
    { Attributes: 'W/O #', id: 6 },
    { Attributes: 'Status', id: 7 },
    { Attributes: 'App ID', id: 8 },
    { Attributes: 'Trans Flow', id: 9 },
    { Attributes: 'Process Tag', id: 10 },
    { Attributes: 'Trans Type', id: 11 },
    { Attributes: 'Entry Date', id: 12 },
    { Attributes: 'Receive Date', id: 13 },
  ];

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
              <td>Interface ID</td>
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
      <div>
        <table className='filter-table table-3'>
          <thead>
            <tr>
              <th colSpan='3'>Select Columns To Display</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='multiselect-input'>
                  <Multiselect
                    options={data}
                    displayValue='Attributes'
                    onSelect={(selectedList, selectedItem) => {
                      console.log(selectedItem, selectedList)
                      // Handle the selected items
                    }}
                    onRemove={(selectedList, removedItem) => {
                      console.log(removedItem, selectedList);
                      // Handle the removed items
                    }}
                  />
                  <input
                    type='submit'
                    value='Show Logs'
                    className='multiselect-btn'
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className='table-header'>
          <p>
            <strong>Select Columns To Display</strong>
          </p>
        </div>
        <div className='multiselect-input'>
          <Multiselect
            options={data}
            displayValue='Attributes'
            onSelect={(selectedList, selectedItem) => {
              // Handle the selected items
            }}
            onRemove={(selectedList, removedItem) => {
              // Handle the removed items
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default DropdownTable;
