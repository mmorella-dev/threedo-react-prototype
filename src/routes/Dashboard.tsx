import robot from '../../assets/robot.png';

const Dashboard = () => (
  <div style={{textAlign: 'center'}}>
    <h1>Welcome to ThreeDo!</h1>
    <p>Sample text. Use "Print a Part" to get started!</p>
    <img
      style={{ display: 'block', margin: '0 auto' }}
      width={200}
      src={robot}
      alt="ThreeDo robot logo"
    />
  </div>
);

export default Dashboard;
