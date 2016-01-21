var Records = React.createClass({
  credits: function() {

  },
  debits: function() {

  },
  balance: function() {

  },
  render: function() {
    var records_nodes = this.state.records.map(function(elem) {
      return (
        <Record key={elem.id} record={elem}></Record>
      );
    });
    return (
      <div className="records">
        <h2 className="title">Records</h2>
        <RecordForm handleNewRecord={this.addRecord}></RecordForm>
        <br></br>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records_nodes}
          </tbody>
        </table>
      </div>
    )
  },
  getInitialState: function() {
    return {records: this.props.data};
  },
  getDefaultProps: function() {
    return [];
  },
  addRecord: function(record) {
    var records = this.state.records.slice();
    records.push(record);
    this.setState({records: records});
  }
});
