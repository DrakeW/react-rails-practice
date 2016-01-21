var Records = React.createClass({
  credits: function() {
    var credits = this.state.records.filter(function(record) {
      return record.amount >= 0;
    })
    return credits.reduce(function(prev, cur) {
      return prev + parseFloat(cur.amount);
    }, 0);
  },
  debits: function() {
    var debits = this.state.records.filter(function(record) {
      return record.amount < 0;
    })
    return debits.reduce(function(prev, cur) {
      return prev + parseFloat(cur.amount);
    }, 0)
  },
  balance: function() {
    return this.credits() + this.debits();
  },
  render: function() {
    var records_nodes = this.state.records.map(function(elem) {
      return (
        <Record key={elem.id} record={elem} handleDeleteRecord={this.deleteRecord}></Record>
      );
    });
    return (
      <div className="records container">
        <h2 className="title">Records</h2>
        <div className="row">
          <AmountBox type="success" amount={this.credits()} text="Credits"></AmountBox>
          <AmountBox type="danger" amount={this.debits()} text="Debits"></AmountBox>
          <AmountBox type="info" amount={this.balance()} text="Balance"></AmountBox>
        </div>
        <RecordForm handleNewRecord={this.addRecord}></RecordForm>
        <br></br>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
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
  },
  deleteRecord: function(record) {
    var records = this.state.records.slice();
    var index  = records.indexOf(record);
    records.splice(index, 1);
    this.replaceState({records: records});
  }
});
