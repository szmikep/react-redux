export const NUMBER_ADD = "NUMBER_ADD";
export const NUMBER_LESS = "NUMBER_LESS";
export const NUMBER_VALUE = "NUMBER_VALUE";
export function setAction(type,value=false){
	switch(type){
		case "add":
		return {type:NUMBER_ADD}
		case "less":
		return {type:NUMBER_LESS}
		case "value":
		return {type:NUMBER_VALUE,value:value}
	}
}