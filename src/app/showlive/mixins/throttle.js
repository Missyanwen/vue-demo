
export default {
    methods: {
        throttle(fn, delay, mustApplyTime){
	        clearTimeout(fn.timer);
	        fn._cur = Date.now();

	        if(!fn._start){
	            fn._start = fn._cur;
	        }
	        if(fn._cur - fn._start > mustApplyTime){
	            fn.apply(null, arguments);
	            fn._start = fn._cur;
	        }else{
	            fn.timer = setTimeout(function(){
	                fn.apply(null, arguments);
	            },delay);
	        }
		},
    }
}
