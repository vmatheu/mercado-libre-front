import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
chai.use(sinonChai);

const { expect } = chai;

export {
  expect,
  chai as default,
};
