export interface IeReqIFHeader {
  title?: string,
  id?: string
}

export class eReqIFHeader implements IeReqIFHeader{
  title?: string;
  id?: string;

  _inputId: any;
  _inputTitle: any;

  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  constructor(data: any) {
    console.error('asdsad');
    console.error(data);

    if(data.data['title']) {
      this.title = data.data.title;
    }
    
    if(data.data['id']) {
      this.id = data.data.id;
    }
  }

  render(){
    const wrapper = document.createElement('div');
    const inputTitle = document.createElement('input');

    inputTitle.id = "title";
    
    wrapper.classList.add('eReqIFHeader');
    

    inputTitle.placeholder = 'Title';
    inputTitle.value = this.title && this.title ? this.title : '';

    const inputId = document.createElement('input');

    inputId.id = "id";
    
    wrapper.classList.add('eReqIFHeader');
    
    inputId.placeholder = 'ID';
    inputId.value = this.id && this.id ? this.id : '';
    
    this._inputId = inputId;
    this._inputTitle = inputTitle;

    wrapper.appendChild(inputId);
    wrapper.appendChild(inputTitle);

    return wrapper;
  }

  save(blockContent: any){
    return {
      id: this._inputId.value,
      title: this._inputTitle.value
    }
  }
}
