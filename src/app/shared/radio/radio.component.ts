import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio.option.model';

//  módulo responsável por conversar com as diretivas do componente, ao implementar ele, devemos declarar 4 métódos;
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      
      //REGISTA O COMPONENTE RADIOCOMPONENT COMO VALUE_ACESSOR DEIXANDO ASSIM O MESMO DISPONÍVEL PARA UTILIZAR AS DIRETIVAS NG_MODEL E NG_REACTIVE
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value

    //DESTA FORMA, ESTAMOS AVISANDO AS DIRETIVAS QUE ESTÃO SENDO USADAS PELO COMPONENTE, QUE OS VALORES MUDARAM
    this.onChange(this.value)
  }

  /**
    * Write a new value to the element.
    * PRIMEIRO MÉTODO DO  ControlValueAccessor -> serve para receber o obj que a diretiva está mandando;
    */
  writeValue(obj: any): void {
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   * SEGUNDO MÉTODO DO ControlValueAccessor -> avisas as diretivas quando o valor do dado mudou.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void { }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void { }

}
