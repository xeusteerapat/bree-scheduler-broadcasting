import { useState } from 'react';

function App() {
  return (
    <div className='ui container'>
      <h1>Welcome to Broadcast Service</h1>
      <form className='ui form'>
        <div className='field'>
          <label>First Name</label>
          <input type='text' name='first-name' placeholder='First Name' />
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
      <hr />
      <table className='ui striped table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Joined</th>
            <th>E-mail</th>
            <th>Called</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Jamie Harington</td>
            <td>January 11, 2014</td>
            <td>jamieharingonton@yahoo.com</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Jill Lewis</td>
            <td>May 11, 2014</td>
            <td>jilsewris22@yahoo.com</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>No</td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Jamie Harington</td>
            <td>January 11, 2014</td>
            <td>jamieharingonton@yahoo.com</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Jill Lewis</td>
            <td>May 11, 2014</td>
            <td>jilsewris22@yahoo.com</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
