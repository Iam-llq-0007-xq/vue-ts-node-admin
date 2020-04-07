import store from 'js-cookie';
import md5 from 'md5';

const TokenKey = md5('Senserealty-Token');
const AkKey = md5('Senserealty-Ak');
const CompanyIdKey = md5('Senserealty-CompanyId');
const CompanyNameKey = md5('Senserealty-CompanyName');
const IsRootKey = md5('Senserealty-IsRoot');
const NodeIdKey = md5('Senserealty-NodeId');
const NodeNameKey = md5('Senserealty-NodeName');
const ProductlineKey = md5('Senserealty-Productline');
const ProductlineNameKey = md5('Senserealty-ProductlineName');
const RoleKey = md5('Senserealty-Role');
const EmailKey = md5('Senserealty-Email');
const UidKey = md5('Senserealty-Uid');
const UsernameKey = md5('Senserealty-Username');

export class StoreStateService {
  static getToken() {
    return store.get(TokenKey);
  }
  static removeToken() {
    return store.remove(TokenKey);
  }
  static getAk() {
    return store.get(AkKey);
  }
  static removeAk() {
    return store.remove(AkKey);
  }
  static getCompanyId() {
    return store.get(CompanyIdKey);
  }
  static removeCompanyId() {
    return store.remove(CompanyIdKey);
  }
  static getCompanyName() {
    return store.get(CompanyNameKey);
  }
  static removeCompanyName() {
    return store.remove(CompanyNameKey);
  }
  static getIsRoot() {
    return store.get(IsRootKey);
  }
  static removeIsRoot() {
    return store.remove(IsRootKey);
  }
  static getNodeId() {
    return store.get(NodeIdKey);
  }
  static removeNodeId() {
    return store.remove(NodeIdKey);
  }
  static getNodeName() {
    return store.get(NodeNameKey);
  }
  static removeNodeName() {
    return store.remove(NodeNameKey);
  }
  static getProductline() {
    return store.get(ProductlineKey);
  }
  static removeProductline() {
    return store.remove(ProductlineKey);
  }
  static getProductlineName() {
    return store.get(ProductlineNameKey);
  }
  static removeProductlineName() {
    return store.remove(ProductlineNameKey);
  }
  static getRole() {
    return store.get(RoleKey);
  }
  static removeRole() {
    return store.remove(RoleKey);
  }
  static getEmail() {
    return store.get(EmailKey);
  }
  static removeEmail() {
    return store.remove(EmailKey);
  }
  static getUid() {
    return store.get(UidKey);
  }
  static removeUid() {
    return store.remove(UidKey);
  }
  static getUsername() {
    return store.get(UsernameKey);
  }
  static removeUsername() {
    return store.remove(UsernameKey);
  }

  setToken(token: string) {
    return store.set(TokenKey, token);
  }

  setAk(ak: string) {
    return store.set(AkKey, ak);
  }

  setCompanyId(companyId: string) {
    return store.set(CompanyIdKey, companyId);
  }

  setCompanyName(companyName: string) {
    return store.set(CompanyNameKey, companyName);
  }

  setIsRoot(isRoot: string) {
    return store.set(IsRootKey, isRoot);
  }

  setNodeId(nodeId: string) {
    return store.set(NodeIdKey, nodeId);
  }

  setNodeName(nodeName: string) {
    return store.set(NodeNameKey, nodeName);
  }

  setProductline(productline: string) {
    return store.set(ProductlineKey, productline);
  }

  setProductlineName(productlineName: string) {
    return store.set(ProductlineNameKey, productlineName);
  }

  setRole(role: string) {
    return store.set(RoleKey, role);
  }

  setUid(uid: string) {
    return store.set(UidKey, uid);
  }

  setUsername(username: string) {
    return store.set(UsernameKey, username);
  }
}
