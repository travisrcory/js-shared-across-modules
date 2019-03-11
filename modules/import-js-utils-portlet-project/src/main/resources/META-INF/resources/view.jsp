<%@ include file="/init.jsp" %>

<div class="row">
	<div class="col-2">
		<aui:input label="" name="addNumberA" type="number" value="0" />
	</div>

	<div class="col-3 text-center">
		+
	</div>

	<div class="col-2">
		<aui:input label="" name="addNumberB" type="number" value="0" />
	</div>

	<div class="col-3 tex-center">
		=
	</div>

	<div class="col-2">
		<aui:input label="" name="addNumberResult" readonly="true" />
	</div>
</div>

<div class="row">
	<div class="col-2">
		<aui:input label="" name="multiplyNumberA" type="number" value="0" />
	</div>

	<div class="col-3 text-center">
		x
	</div>

	<div class="col-2">
		<aui:input label="" name="multiplyNumberB" type="number" value="0" />
	</div>

	<div class="col-3 tex-center">
		=
	</div>

	<div class="col-2">
		<aui:input label="" name="multiplyNumberResult" readonly="tue" />
	</div>
</div>

<aui:script require="import-js-utils-portlet-project@1.0.0/js/main.es as main">
    var mainJS = new main.default('<portlet:namespace />');
</aui:script>