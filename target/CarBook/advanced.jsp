

  
<head>
    <link href="dashgum/assets/js/advanced-datatable/media/css/demo_page.css" rel="stylesheet" />
    <link href="dashgum/assets/js/advanced-datatable/media/css/demo_table.css" rel="stylesheet" />
    <link rel="stylesheet" href="dashgum/assets/js/advanced-datatable/media/css/DT_bootstrap.css" />

        

    <link href="dashgum/assets/css/style-responsive.css" rel="stylesheet">
    



  </head>

  <body>

  <section id="container" >

      <section id="">
          <section class="col-lg-10 text-center">

				<div class="row mb ml">
				
				   <!-- page start-->
                  <div class="content-panel">
                        <div class="adv-table">
                            <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-info">
                                <thead>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th class="hidden-phone">Platform(s)</th>
                                    <th class="hidden-phone">Engine version</th>
                                    <th class="hidden-phone">CSS grade</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="gradeX">
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 4.0</td>
                                    <td class="hidden-phone">Win 95+</td>
                                    <td class="center hidden-phone">4</td>
                                    <td class="center hidden-phone">X</td>
                                </tr>
                                <tr class="gradeC">
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 5.0</td>
                                    <td class="hidden-phone">Win 95+</td>
                                    <td class="center hidden-phone">5</td>
                                    <td class="center hidden-phone">C</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 5.5</td>
                                    <td class="hidden-phone">Win 95+</td>
                                    <td class="center hidden-phone">5.5</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 6</td>
                                    <td class="hidden-phone">Win 98+</td>
                                    <td class="center hidden-phone">6</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Trident</td>
                                    <td>Internet Explorer 7</td>
                                    <td class="hidden-phone">Win XP SP2+</td>
                                    <td class="center hidden-phone">7</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Trident</td>
                                    <td>AOL browser (AOL desktop)</td>
                                    <td class="hidden-phone">Win XP</td>
                                    <td class="center hidden-phone">6</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 1.0</td>
                                    <td class="hidden-phone">Win 98+ / OSX.2+</td>
                                    <td class="center hidden-phone">1.7</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 1.5</td>
                                    <td class="hidden-phone">Win 98+ / OSX.2+</td>
                                    <td class="center hidden-phone">1.8</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>
                                <tr class="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 2.0</td>
                                    <td class="hidden-phone">Win 98+ / OSX.2+</td>
                                    <td class="center hidden-phone">1.8</td>
                                    <td class="center hidden-phone">A</td>
                                </tr>



                                </tbody>
                            </table>
                        </div>
                  </div>
              <!-- page end-->

				
              </div><!-- /row -->

		</section><! --/wrapper -->
      </section><!-- /MAIN CONTENT -->

      <!--main content end-->

  </section>

	<script type="text/javascript" language="javascript" src="dashgum/assets/js/advanced-datatable/media/js/jquery.js"></script>
    <script src="dashgum/assets/js/bootstrap.min.js"></script>
    <script class="include" type="text/javascript" src="dashgum/assets/js/jquery.dcjqaccordion.2.7.js"></script>



    <script type="text/javascript" language="javascript" src="dashgum/assets/js/advanced-datatable/media/js/jquery.dataTables.js"></script>




    <!--script for this page-->
    

  
    <script type="text/javascript">
      /* Formating function for row details */
      function fnFormatDetails ( oTable, nTr )
      {
          var aData = oTable.fnGetData( nTr );
          var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
          sOut += '<tr><td>Rendering engine:</td><td>'+aData[1]+' '+aData[4]+'</td></tr>';
          sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
          sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
          sOut += '</table>';

          return sOut;
      }

      $(document).ready(function() {
          /*
           * Insert a 'details' column to the table
           */
          var nCloneTh = document.createElement( 'th' );
          var nCloneTd = document.createElement( 'td' );
          nCloneTd.innerHTML = '<img src="dashgum/assets/js/advanced-datatable/examples/examples_support/details_open.png">';
          nCloneTd.className = "center";

          $('#hidden-table-info thead tr').each( function () {
              this.insertBefore( nCloneTh, this.childNodes[0] );
          } );

          $('#hidden-table-info tbody tr').each( function () {
              this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
          } );

          /*
           * Initialse DataTables, with no sorting on the 'details' column
           */
          var oTable = $('#hidden-table-info').dataTable( {
              "aoColumnDefs": [
                  { "bSortable": false, "aTargets": [ 0 ] }
              ],
              "aaSorting": [[1, 'asc']]
          });

          /* Add event listener for opening and closing details
           * Note that the indicator for showing which row is open is not controlled by DataTables,
           * rather it is done here
           */
          $('#hidden-table-info tbody td img').live('click', function () {
              var nTr = $(this).parents('tr')[0];
              if ( oTable.fnIsOpen(nTr) )
              {
                  /* This row is already open - close it */
                  this.src = "dashgum/assets/js/advanced-datatable/examples/examples_support/details_open.png";
                  oTable.fnClose( nTr );
              }
              else
              {
                  /* Open this row */
                  this.src = "dashgum/assets/js/advanced-datatable/examples/examples_support/details_close.png";
                  oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
              }
          } );
      } );
  </script>

  </body>

</html>
