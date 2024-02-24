import { useRef, useState } from "react";
import "./dashboard.css";
import { Multiselect } from "multiselect-react-dropdown";

const DropdownTable = () => {
  const multiselectRef = useRef(null);
  const [filterOptions, setFilterOptions] = useState({}); // State variable to hold selected options
  const [selectedItems, setSelectedItems] = useState([]); // State variable to hold selected options
  const [selectAllButton, setSelectAllButton] = useState("Select All"); // State variable to hold selected options

  // Function to handle the dropdown selection
  const handleFilterSelection = (value, attribute) => {
    setFilterOptions((prevState) => ({
      ...prevState,
      [attribute]: value,
    }));
  };

  const updateSelectItems = (selectedList) => {
    setSelectedItems(selectedList);
    
    if ((selectedItems.length + 1) === data.length) {
      setSelectAllButton("Remove All")
    } else {
      setSelectAllButton("Select All")
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      multiselectRef.current?.resetSelectedValues().then(() => {
        updateSelectItems([]);
        setSelectAllButton("Select All")
      });
    } else {
      updateSelectItems(data);
      setSelectAllButton("Remove All")
    }
  };

  const filterData = [
    { Attribute: "Interface ID", id: 1 },
    { Attribute: "AssetID", id: 2 },
    { Attribute: "CallRef", id: 3 },
    { Attribute: "W/O #", id: 4 },
    { Attribute: "Transaction Type", id: 5 },
    { Attribute: "MCN #", id: 6 },
  ];

  const data = [
    { Attribute: "Customer ID", id: 1 },
    { Attribute: "Interface ID", id: 2 },
    { Attribute: "Asset ID", id: 3 },
    { Attribute: "Trans ID", id: 4 },
    { Attribute: "Call Ref", id: 5 },
    { Attribute: "W/O #", id: 6 },
    { Attribute: "Status", id: 7 },
    { Attribute: "App ID", id: 8 },
    { Attribute: "Trans Flow", id: 9 },
    { Attribute: "Process Tag", id: 10 },
    { Attribute: "Trans Type", id: 11 },
    { Attribute: "Entry Date", id: 12 },
    { Attribute: "Receive Date", id: 13 },
  ];

  return (
    <div>
      <header className="header">
        <img src="images/Atleos Logo.png" alt="Logo" />
        <nav>
          <h2>SOUP Customer Interface Dashboard</h2>
        </nav>
      </header>
      <div className="container">
        <table className="filter-table table-1">
          <thead>
            <tr>
              <th colSpan="3">Select Filter To Display Result</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item, index) => (
              <tr className="table-row" key={index}>
                <td>{item.Attribute}</td>
                <td>
                  <div className="dropdown">
                    <button className="dropbtn">
                      {filterOptions[item.Attribute] || "Equals"}
                    </button>
                    <div className="dropdown-content">
                      <a
                        href="#"
                        onClick={() =>
                          handleFilterSelection("Equals", item.Attribute)
                        }
                      >
                        Equals
                      </a>
                      <a
                        href="#"
                        onClick={() =>
                          handleFilterSelection("Begins With", item.Attribute)
                        }
                      >
                        Begins With
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="filter-table table-2">
          <thead>
            <tr>
              <th colSpan="2">Filter Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>Search By</td>
              <td>
                <input type="text" id="searchBy" className="form-control" />
              </td>
            </tr>
            <tr className="table-row">
              <td>Start Date</td>
              <td>
                <input type="date" id="startDate" className="form-control" />
              </td>
            </tr>
            <tr className="table-row">
              <td>End Date</td>
              <td>
                <input type="date" id="endDate" className="form-control" />
              </td>
            </tr>
            <tr className="table-row">
              <td>Beginning Seq No.</td>
              <td>
                <input type="text" id="beginSeqNo" className="form-control" />
              </td>
            </tr>
            <tr className="table-row">
              <td>Ending Seq. No.</td>
              <td>
                <input type="text" id="endSeqNo" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="filter-table table-3">
          <thead>
            <tr>
              <th colSpan="3">Select Columns To Display</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="multiselect-input">
                  <Multiselect
                    options={data}
                    displayValue="Attribute"
                    selectedValues={selectedItems}
                    ref={multiselectRef}
                    onSelect={updateSelectItems}
                    onRemove={updateSelectItems}
                  />
                  <input
                    type="submit"
                    value="Show Logs"
                    className="multiselect-btn"
                  />
                  <input
                    type="button"
                    value={selectAllButton}
                    className="multiselect-btn"
                    onClick={handleSelectAll}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownTable;
